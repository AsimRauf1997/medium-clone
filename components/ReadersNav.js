import smallLogo from "../static/smallLogo.png";
import { HiOutlineHome } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import Profile from "../static/qazi.jpg";
import Link from "next/link";
import Image from "next/image";
const styles = {
  logoContainer: `cursor-pointer`,
  wrapper: `w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]`,
  iconContainer: `flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[#787878]`,
  divider: `border-b`,
  profileImageContainer: ` w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center`,
  profileImage: `object-cover`,
};
const ReadersNav = () => {
  return (
    <div className={styles.wrapper}>
      <Link href='/'>
        <div className={styles.logoContainer}>
          <Image src={smallLogo} alt='Logo' width={100} height={100} />
        </div>
      </Link>
      <div className={styles.iconContainer}>
        <HiOutlineHome />
        <FiBell />
        <BiBookmark />
        <RiArticleLine />
        <div className={styles.divider} />
        <BsPencilSquare />
      </div>
      <div className={styles.profileImageContainer}>
        <Image className={styles.profileImage} src={Profile} alt='profile' />
      </div>
    </div>
  );
};

export default ReadersNav;
