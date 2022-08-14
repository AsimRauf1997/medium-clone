import Banner from "../components/Banner";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
const styles = {
  postList: `flex flex-col gap-3 p-2 sm:grid-col-2 
  lg:grid-col-4 md:gap-6 md:p-6`,
  continer: `max-w-7xl flex-1 `,
  main: `flex items-center justify-center`,
  wrapper: `mx-auto`,
};
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Banner />
      <div className={styles.main}>
        <div className={styles.continer}>
          <div className={styles.postList}>
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>
    </div>
  );
}
