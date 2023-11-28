import SelectSize from './SelectSize/SelectSize';
import ExcludeWords from './ExcludeWords/ExcludeWords';
import CheckRegions from './CheckRegions/CheckRegions';
import InputSalary from './InputSalary/InputSalary';
import RadioExperience from './RadioExperience/RadioExperience';
import CheckEmployment from './CheckEmployment/CheckEmployment';
import SelectTime from './SelectTime/SelectTime';
import RadioEducation from './RadioEducation/RadioEducation';
import ButtonClear from '../../buttons/ButtonClear/ButtonClear';
import './Filters.scss';

const Filters = () => {
  return (
    <div className="main__filters filters">
      <SelectSize />
      <ExcludeWords />
      <CheckRegions />
      <InputSalary />
      <RadioExperience />
      <SelectTime />
      <CheckEmployment />
      <RadioEducation />
      <ButtonClear />
    </div>
  );
};

export default Filters;
