import Breadcrumbs from "../Breadcrumbs";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
  breadName?: string;
}

const BaseLayout = (props: Props) => {
  const { children, breadName } = props;

  return (
    <>
      <div className={styles.wrapper}>
        {/* header */}
        <div className={styles.header}>
          <Header />
          <div className={styles.headerEmpty} />
        </div>

        {/* breadcrumbs */}
        {!!breadName && <Breadcrumbs breadName={breadName} />}

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
