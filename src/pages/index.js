import { Banner, ArticlePreview, TagList, FeedToggle } from "@/components/home";
import { API_ENDPOINTS } from "@/constants/constant";
import { API } from "@/constants/env";
import Head from "next/head";
import { SWRConfig, unstable_serialize } from "swr";

const ARTICLE_API = `${API}${API_ENDPOINTS.ARTICLE.ROOT}`;
const TAG_API = `${API}${API_ENDPOINTS.TAGS.ROOT}`;
const fetcher = (url) => fetch(url).then((res) => res.json());

export async function getServerSideProps(context) {
  const currentPage = 1;
  const articlesData = await fetcher(ARTICLE_API);
  const tagData = await fetcher(TAG_API);
  return {
    props: {
      articlesData,
      fallback: {
        [unstable_serialize([ARTICLE_API, currentPage])]: articlesData,

        [TAG_API]: tagData,
      },
    },
  };
}

const Home = ({ fallback, articlesData }) => {
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

                <ArticlePreview ARTICLE_API={ARTICLE_API} articlesData={articlesData} />
              </div>

              <div className="col-md-3">
                <div className="sidebar">
                  <p>Popular Tags</p>
                  <TagList TAG_API={TAG_API} />
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
