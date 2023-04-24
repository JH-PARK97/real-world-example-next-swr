import { ArticleAction, ArticleBanner, ArticleContainer, CommentCard, PostCommentForm } from "@/components/article";
import { API_URL } from "@/constants/API";
import { fetcher } from "src/utills/fetcher";

/**
 *
 * @param {import('next').GetServerSidePropsContext} context
 * @returns
 */
export async function getServerSideProps(context) {
  const slug = context.query.slug?.toString();
  const articleDetail = await fetcher(`${API_URL.ARTICLE.DETAIL(slug)}`);
  return {
    props: {
      articleDetail,
    },
  };
}

const Article = ({ articleDetail }) => {
  const { article } = articleDetail;

  return (
    <div>
      <div className="article-page">
        <ArticleBanner articleDetail={article} />

        <div className="container page">
          <ArticleContainer articleDetail={article} />

          <hr />

          <div className="article-actions">
            <ArticleAction articleDetail={article} />
          </div>

          <div className="row">
            <div className="col-xs-12 col-md-8 offset-md-2">
              <PostCommentForm />

              <div className="card">
                <CommentCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
