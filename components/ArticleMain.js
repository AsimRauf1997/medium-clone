import Image from "next/image";
import Profile from "../static/qazi.jpg";
import Banner from "../static/jsLogo.png";

import { AiFillPlayCircle } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";

const styles = {
  wrapper: `flex items-center justify-center flex-[3] border-l border-r`,
  content: `h-screen w-full p-[2rem]`,
  postHeaderContainer: `flex justify-between mt-[2.2rem] mb-[2.2rem] items-center`,
  authorContainer: `flex gap-[1rem] `,
  authorProfileImageContainer: `h-[3rem] w-[3rem] grid center rounded-full overflow-hidden`,
  image: `object-cover`,
  column: `flex-1 flex flex-col justify-center`,
  postDetails: `flex gap-[.2rem] text-[#787878]`,
  listenButton: `flex items-center gap-[.2rem] text-[#1A8917]`,
  socials: `flex gap-[1rem] text-[#787878] cursor-pointer`,
  space: `w-[.5rem]`,
  bannerContiner: `h-[20rem] w-full grid center overflow-hidden mb-[2rem]`,
  articleMainContainer: `flex flex-col gap-[1rem]`,
  image: `object-cover`,
  title: `font-bold text-3xl`,
  subtitle: `font-mediumSerifItalic text-[1.4rem] text-[#292929]`,
  articleText: `font-medimuSerif text-[1.4rem] text-[#292929]`,
};
const ArticleMain = () => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <div className={styles.postHeaderContainer}>
        <div className={styles.authorContainer}>
          <div className={styles.authorProfileImageContainer}>
            <Image className={styles.image} src={Profile} alt='Profile' />
          </div>
          <div className={styles.column}>
            <div>Asim Rauf</div>
            <div className={styles.postDetails}>
              <span>June 15 ~7 min read ~ </span>
              <span className={styles.listenButton}>
                <AiFillPlayCircle />
                Listen
              </span>
            </div>
          </div>
        </div>
        <div className={styles.socials}>
          <IoLogoTwitter />
          <FaFacebook />
          <GrLinkedin />
          <HiOutlineLink />
          <div className={styles.space} />
          <BiBookmarks />
          <FiMoreHorizontal />
        </div>
      </div>
      <div className={styles.articleMainContainer}>
        <div className={styles.bannerContiner}>
          <Image
            src={Banner}
            alt='Banner'
            height={100}
            width={100}
            className={styles.image}
          />
        </div>
        <h1 className={styles.title}>
          7 Free Tools That Will Make You More Productive In 2022
        </h1>
        <h4 className={styles.subtitle}>
          <div>Asim Rauf, June 15, 2022</div>
          <div>Brief: Productivity is a skill that can be learned.</div>
        </h4>
        <div className={styles.articleText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </div>
  </div>
);

export default ArticleMain;
