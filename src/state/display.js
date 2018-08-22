import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { count } = props;
  return (
    <div>
      {count}
    </div>
  );
}

Display.propTypes = {
  count: PropTypes.number.isRequired,
};


export default Display;

// display() {
//     const copy = this.state.count;
//     return <div>{copy}</div>;
//     // const { count } = this.state;
//     // return <div>{count}</div>;
//   }
