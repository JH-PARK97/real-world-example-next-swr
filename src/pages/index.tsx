import { Banner, ArticlePreview, TagList, FeedToggle } from "@/components/home";
import { API } from "../constants/env";

const Home = () => {
  return (
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
  );
};

export default Home;
