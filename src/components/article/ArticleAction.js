import FavoriteButton from "@/components/common/FavoriteButton";
import FollowButton from "@/components/common/FollowButton";
import Link from "next/link";

const ArticleAction = ({ articleDetail }) => {
  const { favorited, favoritesCount, author, updatedAt } = articleDetail;
  const { username, image, following } = author;
  return (
    <div className="article-meta">
      <Link href="profile.html">
        <img src={image} />
      </Link>
      <div className="info">
        <Link href="" className="author">
          {username}
        </Link>
        <span className="date">{new Date(updatedAt).toDateString()}</span>
      </div>
      <FollowButton following={following} username={username} />
      &nbsp;&nbsp;
      <FavoriteButton favorited={favorited} favoritesCount={favoritesCount} username={username} />
    </div>
  );
};

export default ArticleAction;
