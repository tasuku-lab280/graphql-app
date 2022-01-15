import Link from 'next/link';
import styles from './styles.module.scss';

const Footer: React.FC = () => (
  <div className={styles.container}>
    <ul className={styles.lists}>
      <Link href="/">
        <li className={styles.list}>HOME</li>
      </Link>
      <li className={styles.after}>|</li>
      <Link href="/">
        <li className={styles.list}>プライバシーポリシー</li>
      </Link>
      <li className={styles.after}>|</li>
      <Link href="/">
        <li className={styles.list}>免責事項</li>
      </Link>
    </ul>

    {/* copyright */}
    <p className={styles.copy}>
      © &nbsp;<span>2021 TechReminder</span>
    </p>
  </div>
);

export default Footer;
