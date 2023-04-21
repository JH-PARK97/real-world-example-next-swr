import Link from "next/link";
import React from "react";

const FeedToggle = () => {
  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <button className="nav-link ">Your Feed</button>
        </li>
        <li className="nav-item">
          <button className="nav-link active">Global Feed</button>
        </li>
      </ul>
    </div>
  );
};

export default FeedToggle;
