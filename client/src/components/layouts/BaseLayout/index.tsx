import Header from "../Header";
import Footer from "../Footer";
import styles from "./styles.module.scss";

const BaseLayout: React.FC = ({ children }) => {
  return (
    <>
      <div className={styles.wrapper}>
        {/* header */}
        <div className={styles.header}>
          <Header />
          <div className={styles.headerEmpty} />
        </div>

        {/* content */}
        <div className={styles.divider}>{children}</div>

        {/* footer */}
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default BaseLayout;
