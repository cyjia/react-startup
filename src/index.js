import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './components/helloworld';

ReactDOM.render(
  (<HelloWorld name={'World'}/>),
  document.getElementById('root'));
