import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
  title: string;
}

const BasicAsidePartsArea = (props: Props) => {
  const { children, title } = props;

  return (
    <>
      <h6 className={styles.title}>{title}</h6>
      <div className={styles.bar} />
      <div className={styles.field}>{children}</div>
    </>
  );
};

export default BasicAsidePartsArea;
