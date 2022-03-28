// Import
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

// Custom Import
import { resetCurrentUser } from 'services/redux/slice/currentUser';
import styles from './styles.module.scss';

// Componsnt
const Header = () => {
  // Hooks
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const dispatch = useDispatch();

  // Function
  const handleLogout = () => {
    dispatch(resetCurrentUser());
    logout();
  };

  return (
    <div className={styles.container}>
      <div className={styles.top} />
      <div className={styles.main}>
        <Link href="/">
          <div className={styles.title}>
            <h1>TechReminder</h1>
            <p>HOGEHOGE</p>
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
          {!isAuthenticated && <h2 onClick={() => loginWithRedirect()}>ログイン</h2>}
          {isAuthenticated && <h2 onClick={handleLogout}>ログアウト</h2>}
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
