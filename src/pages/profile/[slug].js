/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const profile = () => {
  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img alt="user_image" src="http://i.imgur.com/Qr71crq.jpg" className="user-img" />
              <h4>Eric Simons</h4>
              <p>Cofounder @GoThinkster, lived in HQ for a few months, kinda looks like Peeta from the Hunger Games</p>
              <button className="btn btn-sm btn-outline-secondary action-btn">
                <i className="ion-plus-round"></i>
                &nbsp; Follow Eric Simons
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <button className="nav-link active">My Articles</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link">Favorited Articles</button>
                </li>
              </ul>
            </div>

            <div className="article-preview">
              <div className="article-meta">
                <Link href="">
                  <img alt="profile_image" src="http://i.imgur.com/N4VcUeJ.jpg" />
                </Link>
                <div className="info">
                  <Link href="" className="author">
                    Albert Pai
                  </Link>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 32
                </button>
              </div>
              <Link href="" className="preview-link">
                <h1>The song you ever stop singing. No matter how hard you try.</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-default tag-pill tag-outline">Music</li>
                  <li className="tag-default tag-pill tag-outline">Song</li>
                </ul>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
