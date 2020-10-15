import React, { useState, useEffect } from 'react'
import '../style/quoteList.scss';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow }from '@material-ui/core';
import axios from "axios"

export default function QuoteList() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    axios.get(`/api/quotes`)
      .then((data) => {
      setQuotes(data.data.quotes);
      });
  }, [])


  const quoteRows = quotes.map( quote => {
    return (
      <TableRow key={quote.id}>
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
      <TableContainer>
        <Table size="small">
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
