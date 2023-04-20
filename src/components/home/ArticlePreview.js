/* eslint-disable @next/next/no-img-element */
import Pagination from "@/components/common/Pagination";
import React, { useState } from "react";
import useSWR from "swr";

const ArticlePreview = ({ ARTICLE_API, articlesData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const LIMIT = 10;

  const { data } = useSWR([ARTICLE_API, currentPage], async () => {
    const response = await fetch(`${ARTICLE_API}/?offset=${(currentPage - 1) * 10}`);
    const result = response.json();
    return result;
  });

  const clickPageButton = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <ul>
        {data?.articles?.map((item) => (
          <div key={item.slug} className="article-preview">
            <div className="article-meta">
              <a href="profile.html">
                <img alt="profile-image" src={item.author.image} />
              </a>
              <div className="info">
                <a href="" className="author">
                  {item.author.username}
                </a>
                <span className="date">{new Date(item.createdAt).toLocaleString()}</span>
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
      <Pagination limit={LIMIT} articlesCount={data?.articlesCount} clickPageButton={clickPageButton} />
    </>
  );
};

export default ArticlePreview;
