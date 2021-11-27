import ArticleLayout from "../../layouts/ArticleLayout";
import styles from "./styles.module.scss";

const ArticleTemplate = () => {
  return (
    <ArticleLayout breadName={"hogehoge"}>
      <section className={styles.container}>
        <main className={styles.main}>
          <div>
            {/* ブログタイトルエリア */}
            {/* <TitleArea blogItem={blogItem} /> */}
            ブログタイトルエリアブログタイトルエリアブログタイトルエリアブログタイトルエリアブログタイトルエリアブログタイトルエリアブログタイトルエリアブログタイトルエリアブログタイトルエリアブログタイトルエリアブログタイトルエリアブログタイトルエリアブログタイトルエリアブログタイトルエリアブログタイトルエリアブログタイトルエリア
            {/* 記事本文 */}
            {/* <HighlightBody highlightedBody={highlightedBody} /> */}
            記事本文
          </div>
        </main>
      </section>
    </ArticleLayout>
  );
};

export default ArticleTemplate;
