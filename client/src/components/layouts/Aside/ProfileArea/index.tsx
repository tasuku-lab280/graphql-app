import Image from "next/image";
import BasicAsidePartsArea from "../BasicAsidePartsArea";
import styles from "./styles.module.scss";

const ProfileArea = () => {
  return (
    <BasicAsidePartsArea title="プロフィール">
      <div className={styles.container}>
        {/* アバター */}
        <div className={styles.image}>
          {/* <Image
            className={styles.image__pic}
            src={state.profile.userImage.url}
            alt="Picture"
            width={state.profile.userImage.width}
            height={state.profile.userImage.height}
          /> */}
        </div>
        <hr className={styles.border} />

        {/* プロフィール */}
        <div className={styles.profile}>
          <p className={styles.profile__name}>aaaaaaa</p>
          <p className={styles.profile__eng_name}>aaaaaaa</p>
          <p className={styles.profile__position}>aaaaaaaa</p>
        </div>

        {/* ボタン */}
        <button
          className={styles.button}
          // onClick={(e) => action.handleClick(e)}
        >
          more
        </button>
      </div>
    </BasicAsidePartsArea>
  );
};

export default ProfileArea;
