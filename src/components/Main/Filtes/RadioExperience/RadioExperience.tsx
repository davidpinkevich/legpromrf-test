import { RadioGroup, FormControlLabel, Radio } from '@mui/material';
import './RadioExperience.scss';

const RadioExperience = () => {
  return (
    <div className="filters__experience">
      <h2 className="filters__experience-title">Опыт работы:</h2>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="first__group"
        name="radio-buttons-group"
      >
        <FormControlLabel value="first__group" control={<Radio />} label="Не имеет значения" />
        <FormControlLabel value="second__group" control={<Radio />} label="От 3 до 6 лет" />
        <FormControlLabel value="third__group" control={<Radio />} label="От 1 года до 3 лет" />
        <FormControlLabel value="fourth__group" control={<Radio />} label="Нет опыта" />
      </RadioGroup>
    </div>
  );
};

export default RadioExperience;
