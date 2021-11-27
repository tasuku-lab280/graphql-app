import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  breadName: string;
}

const Breadcrumbs = ({ breadName }: Props) => {
  return (
    <div className={styles.bread}>
      <ul className={styles.bread__list}>
        <li className={styles.bread__item}>
          <Link href="/">
            <span className={styles.bread__link}>ホーム</span>
          </Link>
        </li>
        <li className={styles.breadName}>{breadName}</li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
