const TagButton = ({ tagList }) => {
  return (
    <div>
      <ul className="tag-list">
        {tagList.map((tag) => (
          <li key={tag} className="tag-default tag-pill tag-outline">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagButton;
