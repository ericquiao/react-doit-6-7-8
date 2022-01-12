import * as React from 'react';
import * as ReactDOM from 'react-dom';

export function showWeekday() {
  const today = new Date();
  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const todayLabel = dayLabels[today.getDay()];
  console.log({ todayLabel });

  // const dayElement = React.createElement(
  //   'b',
  //   {
  //     className: 'underline',
  //   },
  //   todayLabel
  // );
  // const spanElement = React.createElement(
  //   'span',
  //   {
  //     className: 'text-xs',
  //   },
  //   'Today is ',
  //   dayElement
  // );
  // const target = document.querySelector('#today-weekday');

  const spanElement = (
    <span className = "text-xs">
      Today is <b className = "underline">{todayLabel}</b>
    </span>
  )
 
  const target = document.querySelector('#today-weekday');

  ReactDOM.render(spanElement, target);
}
