/* eslint-disable @next/next/no-img-element */
import FavoriteButton from "@/components/common/FavoriteButton";
import FollowButton from "@/components/common/FollowButton";
import Link from "next/link";

const ArticleBanner = ({ articleDetail }) => {
  const { favorited, favoritesCount, title, author, updatedAt, following } = articleDetail;
  const { username, image } = author;
  return (
    <div className="banner">
      <div className="container">
        <h1>{title}</h1>

        <div className="article-meta">
          <Link href="">
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
      </div>
    </div>
  );
};

export default ArticleBanner;
