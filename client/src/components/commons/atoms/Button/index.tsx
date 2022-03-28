import { LoadingButton as MuiLoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

// Interface
interface Props {
  label: string;
  loading?: boolean;
  onClick?: () => void;
}

const Button = (props: Props) => {
  // Const
  const { label, loading, onClick } = props;

  // DOM
  return (
    <MuiLoadingButton
      variant="contained"
      loading={loading}
      loadingPosition="start"
      startIcon={loading && <SaveIcon />}
      onClick={onClick}>
      {label}
    </MuiLoadingButton>
  );
};

export default Button;
