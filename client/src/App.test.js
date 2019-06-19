import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import App from './App';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('strike button', () => {

  it('find strike button', () => {
    const {getByText} = render(<Display />);
    getByText("strike");
  })
})

it('adds one to the strikes', ()=>{
  const {getByText} = render(<Display />)
  
  const button = getByText(/strike/i);

  fireEvent(button);

  
})