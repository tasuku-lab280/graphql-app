import ProfileArea from "./ProfileArea";
import styles from "./styles.module.scss";

const Aside = () => {
  return (
    <aside className={styles.aside}>
      {/* プロフィールエリア */}
      <div className={styles.profile}>
        <ProfileArea />
      </div>

      {/* プロフィールエリア レスポンシブ */}
      <div className={styles.profile__responsive}>
        {/* <ProfileAreaResponsive /> */}
      </div>
    </aside>
  );
};

export default Aside;
