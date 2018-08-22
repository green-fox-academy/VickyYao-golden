import { connect } from 'react-redux';
import { buyOne } from '../action';
import Button from '../state/button';

const mapStateToProps = () => {
  return {
    value: 'Buy one',
    id: 'up',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    callback: () => {
      dispatch(buyOne());
    },
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default BuyAcorn;
