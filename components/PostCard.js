import Logo from "../static/author.jpg";
import Image from "next/image";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";
const styles = {
  wrapper: `flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer`,
  authorContainer: `flex gap[.4rem]`,
  authorImageContainer: ` grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  authorImage: `object-cover`,
  authorName: `font-semibold`,
  title: `font-bold text-2xl`,
  breifing: `text-[#787787]`,
  postDetails: ` flex-[2.5] flex flex-col`,
  detailsContainer: `flex items-center justify-between text-[#787878]`,
  category: `bg-[#F2F3F2] p-2 rounded-full`,
  article: `my-2 text-[.9rem]`,
};
const PostCard = () => {
  return (
    <Link href='/post/123'>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                src={Logo}
                alt='author'
                width={40}
                height={40}
                className={styles.authorImage}
              />
            </div>
            <div className={styles.authorName}> Asim Rauf</div>
          </div>
          <h1 className={styles.title}>
            METS ANNOUNCE ROSTER FOR OLD TIMERS’ DAY PRESENTED BY CITI
          </h1>
          <div className={styles.breifing}>
            {" "}
            Productivity is the Best Thing For Me When I Read.
          </div>
          <div className={styles.detailsContainer}>
            <span className={styles.article}>
              June 15 · 5 min read ·
              <span className={styles.category}>Productivity</span>
            </span>
            <span className='cursor-pointer'>
              <FiBookmark className='h-5 w-5' />
            </span>
          </div>
        </div>
        <div>
          <Image height={100} width={100} src={Logo} alt='logo' />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
