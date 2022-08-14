import Image from "next/image";
import Logo from "../static/logo.png";
const styles = {
  wrapper: `flex justify-center gap-10 p-5 bg-[#FCC017]`,
  content: `max-w-7xl  flex flex-1 justify-between gap-10`,
  logoContainer: `flex items-center flex start`,
  logo: `cursor-pointer  object-contain`,
  bannerNav: `flex justify-between cursor-pointer items-center space-x-5`,
  accentedButton: ` bg-black text-white px-4  py-2 rounded-full`,
};

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src={Logo}
            alt='logo'
            width={200}
            height={40}
          />
        </div>
        <div className={styles.bannerNav}>
          <div>Our Story</div>
          <div>Membership</div>
          <div>Sign In</div>
          <div className={styles.accentedButton}>Get Started</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
