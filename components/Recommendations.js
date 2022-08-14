import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
import Replit from "../static/replit.png";
import TutorialImg from "../static/tutorial.jpg";
import CpLogo from "../static/cp.png";
import Profile from "../static/qazi.jpg";
import JsLogo from "../static/jsLogo.png";
const styles = {
  wrapper: ` h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]`,
  accentedButton: `flex text-sm bg-black text-white my-[2rem]  justify-center  items-center py-[.6rem] rounded-full`,
  searchBar: `flex items-center gap-[.6rem] h-[2.6rem] border  px-[1rem] rounded-full `,
  input: `outline-none border-none  w-full`,
  authorContainer: `my-[2rem]`,
  authorProfileImageContainer: `h-[5rem] w-[5rem] rounded-full overflow-hidden`,
  authorName: `font-semibold mb-[.2rem] mt-[1rem]`,
  authorFollowing: `text-[#787878]`,
  authorActions: "flex items-center justify gap-[1.2rem] my-[1rem]",
  actionButton: `px-2 py-1 bg-[#1A8917] text-white rounded-full text-sm`,
  title: `font-semibold`,
  RecommendationsContainer: ``,
  articleContainer: ``,
  recommendationsAuthorProfileImageContainer: ` rounded-full overflow-hidden h-[1.4rem] w-[1.4rem] `,
  RecommendationsAuthorContainer: `flex items-center gap-[.6rem]`,
  recommendationAuthorName: `text-sm text-[#787878]`,
  recommendationTitle: `font-bold`,
  recommendationThumbnailContainer: `flex flex-1 items-center justify-center h-[4rem] w-[4rem]`,
  ThumbnailImage: `object-cover`,
  articleContentWrapper: `flex items-center justify-between cursor-pointer my-[1rem]`,
  articleContent: `flex-[4]`,
};
const Recommendations = ({ author }) => {
  const recommendedPosts = [
    {
      name: "What Can You Do with Replit?",
      image: Replit,
      author: {
        name: "Asim Rauf",
        image: CpLogo,
      },
    },
    {
      name: "The Ultimate Course For JavaScript For Beginners?",
      image: TutorialImg,
      author: {
        name: "Umair Khursheed",
        image: CpLogo,
      },
    },
    {
      name: "How To Become a Developer in 20222?",
      image: JsLogo,
      author: {
        name: "Ateeb Hayat",
        image: CpLogo,
      },
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>Get Unlimited Access</div>
      <div className={styles.searchBar}>
        <AiOutlineSearch />
        <input placeholder='Search' type='text' className={styles.input} />
      </div>
      <div className={styles.authorContainer}>
        <div className={styles.authorProfileImageContainer}>
          <Image src={Profile} alt='profile' />
        </div>
        <div className={styles.authorName}>Asim Rauf</div>
        <div className={styles.authorFollowing}>1M Followers</div>
        <div className={styles.authorActions}>
          <button className={styles.actionButton}>Follow</button>
          <button className={styles.actionButton}>
            <MdMarkEmailUnread />
          </button>
        </div>
      </div>
      <div className={styles.RecommendationsContainer}>
        <div className={styles.title}> More From Medium</div>
        <div className={styles.articleContainer}>
          {recommendedPosts.map((post, i) => (
            <div className={styles.articleContentWrapper} key={i}>
              <div className={styles.articleContent}>
                <div className={styles.RecommendationsAuthorContainer}>
                  <div
                    className={
                      styles.recommendationsAuthorProfileImageContainer
                    }
                  >
                    <Image
                      src={post.author.image}
                      height={100}
                      width={100}
                      alt='profile'
                    />
                  </div>
                  <div className={styles.recommendationAuthorName}>
                    Asim Rauf
                  </div>
                </div>
                <div className={styles.recommendationTitle}>{post.name}</div>
              </div>
              <div className={styles.recommendationThumbnailContainer}>
                <Image
                  className={styles.ThumbnailImage}
                  src={post.image}
                  alt='logo '
                  height={100}
                  width={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
