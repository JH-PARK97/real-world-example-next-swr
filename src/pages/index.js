import { Banner, ArticlePreview, TagList, FeedToggle } from "@/components/home";
import { API_ENDPOINTS } from "@/constants/constant";
import { API } from "@/constants/env";
import Head from "next/head";
import useSWR, { SWRConfig } from "swr";

const ARTICLE_API = `${API}${API_ENDPOINTS.ARTICLE.ROOT}`;
const fetcher = (url) => fetch(url).then((res) => res.json());

export async function getServerSideProps() {
  const articlesData = await fetcher(ARTICLE_API);
  return {
    props: {
      fallback: {
        [ARTICLE_API]: articlesData,
      },
    },
  };
}

const Home = ({ fallback }) => {
  return (
    <>
      <SWRConfig value={{ fallback }}>
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
