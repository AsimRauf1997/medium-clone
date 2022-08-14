import React from "react";
import ArticleMain from "../../components/ArticleMain";
import ReadersNav from "../../components/ReadersNav";
import Recommendations from "../../components/Recommendations";
const styles = {
  content: `flex`,
};
const PostDetails = () => {
  return (
    <div className={styles.content}>
      <ReadersNav />
      <ArticleMain />
      <Recommendations />

      {/* <Recommendations /> */}
    </div>
  );
};

export default PostDetails;
