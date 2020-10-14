import React, { useState, useEffect } from 'react'
import '../style/quoteList.scss';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow }from '@material-ui/core';
import axios from "axios"
import QuoteDetails from './QuoteDetails';

// { id: 1,
//   user_id: 1,
//   departure_location: 'Jinshan',
//   destination_location: 'Edson',
//   departure_date: '2021-01-23',
//   destination_date: '2021-01-04',
//   num_people: 3,
//   transportation: false,
//   price: '$5717.11',
//   date_created: 2020-10-14T02:10:19.125Z,
//   email: 'test@test,com',
//   first_name: 'Avery',
//   last_name: 'Nguyen',
//   phone: '4031234567' }

export default function QuoteList() {
  const [quotes, setQuotes] = useState([])
  const [open, setOpen] = useState(false)
  const [quoteID, setQuoteID] = useState(null)

  useEffect(() => {
    axios.get(`/api/quotes`)
      .then((data) => {
      // console.log("App -> data", data.data.quotes)
      setQuotes(data.data.quotes);
      });
  }, [])

  const toggleOpen = function (id) {
    if(!open) {
      setOpen(true);
      setQuoteID(id);
    } else {
      setOpen(false);
    }
  };

  const quoteRows = quotes.map( quote => {
    return (
      <TableRow key={quote.id} onClick={() => toggleOpen(quote.id)}>
        <TableCell>{quote.id}</TableCell>
        <TableCell>{quote.first_name}</TableCell>
        <TableCell>{quote.destination_location}</TableCell>
        <TableCell>{quote.price}</TableCell>
      </TableRow>
    );
  });

  return (
    <div className="quote-list">
      <h1>Pending Quotes</h1>
      {open && <QuoteDetails quoteID={quoteID} />}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID #</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           {quoteRows}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
