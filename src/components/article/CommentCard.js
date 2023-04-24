import Link from "next/link";
import React from "react";

const CommentCard = () => {
  return (
    <>
      <div className="card-block">
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <Link href="" className="comment-author">
          <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
        </Link>
        &nbsp;
        <Link href="" className="comment-author">
          Jacob Schmidt
        </Link>
        <span className="date-posted">Dec 29th</span>
      </div>
    </>
  );
};

export default CommentCard;
