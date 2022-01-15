import { TextField as MuiTextField } from '@mui/material';

// Interface
interface Props {
  label: string;
  value: string | undefined;
  className: any;
  disabled?: boolean;
  error?: boolean;
  errorMessages?: Array<String>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = (props: Props) => {
  // Const
  const { label, value, className, disabled, error, errorMessages, onChange } = props;

  // Function
  const helperText = () => {
    if (!error) return null;
    return `${label}${errorMessages}`;
  };

  // DOM
  return (
    <div className={className}>
      <MuiTextField
        fullWidth
        label={label}
        value={value}
        disabled={disabled}
        error={error}
        helperText={helperText()}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
