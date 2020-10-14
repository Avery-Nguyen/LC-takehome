import React from 'react';
import Chat from './components/Chat';
import CloseRatio from './components/CloseRatio';
import PopularDestination from './components/PopularDestination';
import PotentialRevenue from './components/PotentialRevenue';
import QuoteForm from './components/QuoteForm';
import QuoteList from './components/QuoteList';
import Revenue from './components/Revenue';
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';
import './style/index.scss';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <div className='layout-row'>
        <SideNav/>
        <div>
          <div className='layout-row'>
            <QuoteForm/>
            <QuoteList/>
          </div>
          <div className='layout-row'>
            <PopularDestination/>
            <Chat/>
          </div>
          <div className='layout-row'>
            <Revenue/>
            <PotentialRevenue/>
            <CloseRatio/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
