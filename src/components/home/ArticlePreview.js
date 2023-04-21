/* eslint-disable @next/next/no-img-element */
import Pagination from "@/components/common/Pagination";
import { PAGE_ENDPOINTS } from "@/constants/constant";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const ArticlePreview = ({ ARTICLE_API }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const LIMIT = 10;

  const { data } = useSWR([ARTICLE_API, currentPage], async () => {
    const response = await fetch(`${ARTICLE_API}/?offset=${(currentPage - 1) * LIMIT}`);
    const result = response.json();
    return result;
  });

  useEffect(() => {
    if (router.query.pageNo) {
      setCurrentPage(router.query.pageNo);
    } else {
      setCurrentPage(1);
    }
  }, [router.query]);

  const clickPageButton = (pageNumber) => {
    const offset = (pageNumber - 1) * LIMIT;
    router.push({
      pathname: PAGE_ENDPOINTS.ROOT,
      query: { pageNo: pageNumber, offset: offset },
    });
  };
  return (
    <>
      <ul>
        {data?.articles?.map((item) => (
          <div key={item.slug} className="article-preview">
            <div className="article-meta">
              <Link href={PAGE_ENDPOINTS.PROFILE}>
                <img alt="profile-image" src={item.author.image} />
              </Link>
              <div className="info">
                <Link href="" className="author">
                  {item.author.username}
                </Link>
                <span className="date">{new Date(item.createdAt).toLocaleString()}</span>
              </div>
              <button className="btn btn-outline-primary btn-sm pull-xs-right">
                <i className="ion-heart"></i> {item.favoritesCount}
              </button>
            </div>
            <Link href="" className="preview-link">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <span>Read more...</span>
            </Link>
          </div>
        ))}
      </ul>
      <Pagination limit={LIMIT} articlesCount={data?.articlesCount} clickPageButton={clickPageButton} />
    </>
  );
};

export default ArticlePreview;
