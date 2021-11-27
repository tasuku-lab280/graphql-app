import BaseLayout from "../BaseLayout/";
import Aside from "../Aside/";
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
  breadName?: string;
}

const ArticleLayout = (props: Props) => {
  const { children, breadName } = props;

  return (
    <BaseLayout breadName={breadName}>
      <article className={styles.article}>{children}</article>
      <div className={styles.aside}>
        <Aside />
      </div>
    </BaseLayout>
  );
};

export default ArticleLayout;
