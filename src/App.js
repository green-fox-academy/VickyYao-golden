import RouterGolden from './router';
// import AppRedux from './container/AppRedux';

const App = children => (
  <div>
    <RouterGolden />
    {children}
  </div>
);

export default App;
