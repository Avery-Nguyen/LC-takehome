import React, { useState } from 'react'
import '../style/sideNav.scss';
import QuoteDetails from './QuoteDetails';

export default function SideNav() {
  const [open, setOpen] = useState(false)

  const toggleOpen = function () {
    if(!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  return (
    <div className='side-nav'>
      <h1>Side Nav</h1>
      <div onClick={toggleOpen} >Quotes</div>
      {open && <QuoteDetails/>}
    </div>
  )
}
