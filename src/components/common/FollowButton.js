const FollowButton = ({ following, username }) => {
    console.log(following)
  return (
    <>
      {/* Follow = false : btn-outline-secondary
              Follow = true  : btn-secondary */}
      <button className="btn btn-sm btn-outline-secondary">
        <i className="ion-plus-round"></i>
        &nbsp; {`${following ? "Unfollow" : "Follow"} ${username}`}
      </button>
    </>
  );
};

export default FollowButton;
