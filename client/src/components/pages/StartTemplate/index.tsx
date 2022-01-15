// Custom Import
import Button from 'components/commons/atoms/Button';
import Loading from 'components/commons/atoms/Loading';
import TextField from 'components/commons/atoms/TextField';
import BaseLayout from 'components/layouts/BaseLayout';
import { useAfterLogin } from 'hooks/useAfterLogin';
import { errorsFor } from 'utils/errorsFor';
import styles from './styles.module.scss';

// Component
const StartTemplate = () => {
  // Hooks
  const [
    { loading, nickname, email, updateUserLoading, updateUserErrors, setNickname, updateUser },
  ] = useAfterLogin();

  // DOM
  if (loading) return <Loading />;

  return (
    <BaseLayout>
      <div className={styles.container}>
        <h2 className={styles.title}>会員情報の入力</h2>
        <TextField className={styles.inputContainer} label="Eメール" value={email} disabled />
        <TextField
          className={styles.inputContainer}
          label="ニックネーム"
          value={nickname}
          error={errorsFor('nickname', updateUserErrors).length > 0}
          errorMessages={errorsFor('nickname', updateUserErrors)}
          onChange={(e) => setNickname(e.target.value)}
        />
        <Button
          label="登録する"
          loading={updateUserLoading}
          onClick={() => updateUser({ variables: { nickname, email } })}
        />
      </div>
    </BaseLayout>
  );
};

// Defaut Export
export default StartTemplate;
