import { FilterInput } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ onFilter }) => {
  return <FilterInput onInput={onFilter} />;
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
