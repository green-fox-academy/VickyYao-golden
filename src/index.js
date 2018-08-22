import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './button';
import Display from './display';

class SimpleGoldenAcornApp extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    // this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 38) {
        this.handle(+1)();
      } else if (e.keyCode === 40) {
        this.handle(-1)();
      }
    });
  }

  handle(param) {
    return () => {
      const { count } = this.state;
      if (param === 1) {
        this.setState(prevState => ({ count: prevState.count + param }));
      } else if (count > 0 && param === -1) {
        this.setState(prevState => ({ count: prevState.count + param }));
      }
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <Button id="up" value="Buy One" callback={this.handle(+1)} />
        <Display count={count} />
        <Button id="down" value="Eat One" callback={this.handle(-1)} />
      </div>
    );
  }
}

ReactDOM.render(
  <SimpleGoldenAcornApp />,
  document.getElementById('root'),
);

// window.addEventListener('keydown', (e) => {
//   if (e.keyCode === 38) {
//     document.querySelector('#up').click();
//   } else if (e.keyCode === 40) {
//     document.querySelector('#down').click();
//   }
// });
