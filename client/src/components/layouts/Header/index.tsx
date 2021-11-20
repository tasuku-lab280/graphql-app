import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./styles.module.scss";

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className={styles.container}>
      <div className={styles.top} />
      <div className={styles.main}>
        <Link href="/">
          <div className={styles.title}>
            <h1>TechReminder</h1>
            <p>学んだことを忘れない</p>
          </div>
        </Link>
        {/* リンク */}
        <div className={styles.link}>
          <Link href="/">
            <h2>ホーム</h2>
          </Link>
          <Link href="/">
            <h2>このサイトについて</h2>
          </Link>
          <h2 onClick={() => loginWithRedirect()}>ログイン</h2>
        </div>
        {/* SP アイコン */}
        <div className={styles.sp}>
          {/* 検索 */}
          {/* {isNotSearchPageLogic(router.pathname) && (
            <div className={styles.sp__search} onClick={handleOpenSearchModal}>
              <SearchIcon />
            </div>
          )} */}

          {/* ハンバーガー */}
          {/* <div className={styles.sp__menu} onClick={handleOpenMenuModal}>
            <MenuIcon />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
