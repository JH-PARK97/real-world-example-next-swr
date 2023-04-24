import TagButton from "@/components/article/TagButton";

const ArticleContainer = ({ articleDetail }) => {
  const { body, tagList } = articleDetail;
  return (
    <div className="row article-content">
      <div className="col-md-12">
        <p>{body}</p>
      </div>
      <div>
        <TagButton tagList={tagList} />
      </div>
    </div>
  );
};

export default ArticleContainer;
