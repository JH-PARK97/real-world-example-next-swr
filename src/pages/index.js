import { Banner, ArticlePreview, TagList, FeedToggle } from "@/components/home";
import { API_URL } from "@/constants/API";
import Head from "next/head";
import { fetcher } from "src/utills/fetcher";
import { SWRConfig, unstable_serialize } from "swr";

/**
 *
 * @param {import('next').GetServerSidePropsContext} context
 * @returns
 */
export async function getServerSideProps(context) {
  // context 파라미터를 이용해서 pageNo가 params query 유무를 통해 처리함.
  const _pageNo = context.query.pageNo?.toString();
  const currentPage = _pageNo ? parseInt(_pageNo, 10) : 1;
  const articlesData = await fetcher(`${API_URL.ARTICLE.ROOT}/?offset=${(currentPage - 1) * 10}`);
  // tagData같은 경우 중요도가 높은 컨텐츠(hero content)가 아니므로 SSR가 필요한가 생각해봐야한다.
  // const tagData = await fetcher(TAG_API);
  return {
    props: {
      fallback: {
        [unstable_serialize([API_URL.ARTICLE.ROOT, currentPage])]: articlesData,
      },
    },
  };
}

const Home = ({ fallback }) => {
  return (
    <>
      <SWRConfig value={{ fallback, fetcher }}>
        <Head>
          <title>HOME | NEXT REALWORLD</title>
        </Head>
        <div className="home-page">
          <Banner />

          <div className="container page">
            <div className="row">
              <div className="col-md-9">
                <FeedToggle />

                <ArticlePreview />
              </div>

              <div className="col-md-3">
                <div className="sidebar">
                  <p>Popular Tags</p>
                  <TagList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SWRConfig>
    </>
  );
};

export default Home;
