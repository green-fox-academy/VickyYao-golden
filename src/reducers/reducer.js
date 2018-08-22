
const toEatOrBuy = (state = 0, action) => {
  switch (action.type) {
    case 'eating':
      if (state > 0) {
        return state - 1;
      }
      return state;
    case 'buying':
      return state + 1;
    default:
      return state;
  }
};
export default toEatOrBuy;
