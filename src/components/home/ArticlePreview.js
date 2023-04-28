/* eslint-disable @next/next/no-img-element */
import Pagination from "@/components/common/Pagination";
import { API_URL } from "@/constants/API";
import { PAGE_ENDPOINTS } from "@/constants/constant";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import useSWR, { useSWRConfig } from "swr";

const ArticlePreview = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const LIMIT = 10;
  const pageNo = useMemo(() => {
    const _pageNo = router.query.pageNo?.toString();
    if (!_pageNo) {
      return 1;
    }
    return parseInt(_pageNo, 10);
  }, [router.query]);

  const { data, isLoading } = useSWR(
    [API_URL.ARTICLE.ROOT, pageNo],
    async (key) => {
      const [url, page] = key;

      const response = await fetch(`${url}/?offset=${(page - 1) * LIMIT}`);
      const result = response.json();
      return result;
    },
    {
      // immutable 안쓰고 처리하려면 이런식으로 해야함.
      // 자동 재검증을 비활성화

      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  // pagination을 CSR로 처리하려면 useRouter에서 swallow를 통한 얕은 라우팅으로 해야함.

  // useEffect(() => {
  //   if (router.query.pageNo) {
  //     setCurrentPage(router.query.pageNo);
  //   } else {
  //     setCurrentPage(1);
  //   }
  // }, [router.query]);

  if (isLoading && !data) {
    return <p>loading. . .</p>;
  }

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
              <Link href={`${PAGE_ENDPOINTS.PROFILE}/${item.author.username}`}>
                <img alt="profile-image" src={item.author.image} />
              </Link>
              <div className="info">
                <Link href={`${PAGE_ENDPOINTS.PROFILE}/${item.author.username}`} className="author">
                  {item.author.username}
                </Link>
                <span className="date">{new Date(item.createdAt).toLocaleString()}</span>
              </div>
              <button className="btn btn-outline-primary btn-sm pull-xs-right">
                <i className="ion-heart"></i> {item.favoritesCount}
              </button>
            </div>
            <Link href={`${PAGE_ENDPOINTS.ARTICLE}/${item.slug}`} className="preview-link">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <span>Read more...</span>
              <ul className="tag-list">
                {item.tagList.map((tag) => (
                  <li key={tag} className="tag-default tag-pill tag-outline">
                    {tag}
                  </li>
                ))}
              </ul>
            </Link>
          </div>
        ))}
      </ul>
      <Pagination limit={LIMIT} articlesCount={data?.articlesCount} clickPageButton={clickPageButton} />
    </>
  );
};

export default ArticlePreview;
