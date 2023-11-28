import { TextField } from '@mui/material';
import './ExcludeWords.scss';

const ExcludeWords = () => {
  return (
    <div className="filters__exclude">
      <TextField fullWidth label="Исключить слова" variant="outlined" />
    </div>
  );
};

export default ExcludeWords;
