/* eslint-disable @next/next/no-img-element */
import { API_ENDPOINTS } from "@/constants/constant";
import { API } from "@/constants/env";
import React from "react";
import useSWR from "swr";

const ARTICLE_API = `${API}${API_ENDPOINTS.ARTICLE.ROOT}`;

const ArticlePreview = () => {
  const { data } = useSWR(ARTICLE_API);

  return (
    <>
      <ul>
        {data.articles.map((item) => (
          <div key={item.slug} className="article-preview">
            <div className="article-meta">
              <a href="profile.html">
                <img alt="profile-image" src={item.author.image} />
              </a>
              <div className="info">
                <a href="" className="author">
                  {item.author.username}
                </a>
                <span className="date">{item.createdAt}</span>
              </div>
              <button className="btn btn-outline-primary btn-sm pull-xs-right">
                <i className="ion-heart"></i> {item.favoritesCount}
              </button>
            </div>
            <a href="" className="preview-link">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <span>Read more...</span>
            </a>
          </div>
        ))}
      </ul>
    </>
  );
};

export default ArticlePreview;
