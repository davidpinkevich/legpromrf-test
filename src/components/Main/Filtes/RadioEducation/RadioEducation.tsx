import { RadioGroup, FormControlLabel, Radio } from '@mui/material';
import './RadioEducation.scss';

const RadioEducation = () => {
  return (
    <div className="filters__education">
      <h2 className="filters__education-title">Образование:</h2>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="first__group"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="first__group"
          control={<Radio />}
          label="Не требуется или не указано"
        />
        <FormControlLabel
          value="third__group"
          control={<Radio />}
          label="Среднее профессиональное"
        />
        <FormControlLabel value="second__group" control={<Radio />} label="Высшее" />
      </RadioGroup>
    </div>
  );
};

export default RadioEducation;
