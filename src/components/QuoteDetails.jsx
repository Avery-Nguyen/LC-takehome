import React, { useEffect, useState} from 'react'
import axios from "axios"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow }from '@material-ui/core';
import '../style/quoteDetails.scss'

export default function QuoteDetails(props) {

 const [details, setDetails] = useState([])
 useEffect(() => {
  axios.get(`/api/quotesdetails`)
    .then((res) => {
      setDetails(res.data.quote);

    });
 }, [])

 const quoteRows = details.map( quote => {
  return (
    <TableRow key={quote.id}>
      <TableCell>{quote.id}</TableCell>
      <TableCell>{quote.first_name}</TableCell>
      <TableCell>{quote.phone}</TableCell>
      <TableCell>{quote.email}</TableCell>
      <TableCell>{quote.destination_location}</TableCell>
      <TableCell>{quote.departure_location}</TableCell>
      <TableCell>{quote.price}</TableCell>
      <TableCell>{quote.departure_date}</TableCell>
      <TableCell>{quote.destination_date}</TableCell>
      <TableCell>{quote.num_people}</TableCell>
      <TableCell>{quote.transportation ? 'Yes' : 'No'}</TableCell>
      <TableCell>{quote.pending ? 'Yes' : 'No'}</TableCell>
    </TableRow>
  );
});

  return (
    <div className='quote-details'>
      <TableContainer >
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID #</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Departure</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Date of Departure</TableCell>
              <TableCell>Date of Return</TableCell>
              <TableCell>Number of Travellers</TableCell>
              <TableCell>Transport Needed</TableCell>
              <TableCell>Pending</TableCell>
              
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
