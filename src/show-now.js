import * as React from 'react';
import * as ReactDOM from 'react-dom';

export const target = document.querySelector('#root');

console.log('target in show-now.js', target);

export function showNow() {
  const now = new Date().toLocaleTimeString();

  // const timeElement = React.createElement(
  //   'span',
  //   {
  //     className: 'font-bold',
  //   },
  //   now
  // );

  // const el = React.createElement(
  //   'small', 
  //   {}, 
  //   'Now is ', 
  //   timeElement);

  // const timeElement = <span className='font-bold'>{now}</span>
  //const el = <small className=''>`Now is {timeElement}`</small>

    const el = (
      <small>
        Now is <span className = "font-bold">{now}</span>
      </small>
    )


  ReactDOM.render(el, target);
}
