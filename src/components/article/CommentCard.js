/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { API_URL } from "@/constants/API";
import { PAGE_ENDPOINTS } from "@/constants/constant";
import Link from "next/link";
import { useRouter } from "next/router";
import { fetcher } from "src/utills/fetcher";
import useSWR from "swr";

const CommentCard = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const { data, isLoading } = useSWR(API_URL.ARTICLE.COMMENT.ROOT(slug), fetcher);
  const { comments } = data ? data : {};

  const canDelete = false;

  console.log(comments);

  return (
    <>
      {comments &&
        comments.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-block">
              <p className="card-text">{item.body}</p>
            </div>
            <div className="card-footer">
              <Link href={`${PAGE_ENDPOINTS.PROFILE}${item.author?.username}`} className="comment-author">
                <img src={item.author?.image} className="comment-author-img" />
              </Link>
              &nbsp;
              <Link href={`${PAGE_ENDPOINTS.PROFILE}${item.author?.username}`} className="comment-author">
                {item.author?.username}
              </Link>
              <span className="date-posted">{new Date(item.createdAt).toDateString()}</span>
              {canDelete && (
                <span className="mod-options">
                  <i className="ion-trash-a" onClick={() => clickDeleteCommentButton()} />
                </span>
              )}
            </div>
          </div>
        ))}
    </>
  );
};

export default CommentCard;
