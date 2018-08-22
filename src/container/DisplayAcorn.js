import { connect } from 'react-redux';
import Display from '../state/display';

const mapStateToProps = (state) => {
  return {
    count: state.toEatOrBuy,
  };
};

const DisplayAcorn = connect(
  mapStateToProps,
)(Display);

export default DisplayAcorn;
