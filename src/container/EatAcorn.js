import { connect } from 'react-redux';
import { eatOne } from '../action';
import Button from '../state/button';

const mapStateToProps = () => {
  return {
    value: 'Eat one',
    id: 'down',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    callback: () => {
      dispatch(eatOne());
    },
  };
};

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default EatAcorn;
