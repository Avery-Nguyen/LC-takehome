import React from 'react';
import QuoteDetails from './components/QuoteDetails';
import QuoteForm from './components/QuoteForm';
import QuoteList from './components/QuoteList';


function App() {
  return (
    <div className="App">
      Hello World
      <QuoteForm/>
      <QuoteList/>
      <QuoteDetails/>
    </div>
  );
}

export default App;
