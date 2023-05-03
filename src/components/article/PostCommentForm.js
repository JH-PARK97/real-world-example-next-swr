/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { GlobalContext } from "src/pages/_app";

const PostCommentForm = () => {
  const { userInfo } = useContext(GlobalContext);

  console.log(userInfo);
  return (
    <form className="card comment-form">
      <div className="card-block">
        <textarea className="form-control" placeholder="Write a comment..." rows="3"></textarea>
      </div>
      <div className="card-footer">
        <img src={userInfo?.user.image} alt="profile-img" className="comment-author-img" />
        <button className="btn btn-sm btn-primary">Post Comment</button>
      </div>
    </form>
  );
};

export default PostCommentForm;
