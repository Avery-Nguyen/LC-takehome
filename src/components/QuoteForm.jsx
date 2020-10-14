import React, { useState } from 'react'
import { TextField, MenuItem, Button }from '@material-ui/core';
import '../style/quoteForm.scss';
import axios from "axios"

export default function QuoteForm() {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [departDate, setDepartDate] = useState('');
  // console.log("QuoteForm -> departDate", departDate)
  const [returnDate, setReturnDate] = useState('');
  const [numPpl, setNumPpl] = useState(null);
  // console.log("QuoteForm -> numPpl", typeof numPpl)
  const [transport, setTransport] = useState(false);
  const [name, setName] = useState('')

  const submitQuote = function () {
    console.log('submitted!!!');
    // event.preventDefault();
    axios.post(`/api/createuser`, {
      name
    })
      .then((res) => {
        // console.log(res)
        // console.log(res.data.user[0], 'sql response')
        const people = parseInt(numPpl);
        return axios.post('/api/createquote', {
          user_id: res.data.user[0].id,
          departure,
          destination,
          departDate,
          returnDate,
          people,
          transport
        })
        .then((res) => {
          console.log(res);
        })
  
      });
  };

  return (
    <div className='quote-form'>
      <h1>Quick Quote</h1>
      <form>
        <TextField id="outlined-basic" variant="outlined" label="From" 
        onChange={event => setDeparture(event.target.value)}/>
        <TextField id="outlined-basic" variant="outlined" label="Destination"
        onChange={event => setDestination(event.target.value)}/>
        <TextField id="outlined-basic" variant="outlined" type="date" label="Depart Date" defaultValue="2017-05-24"
        onChange={event => setDepartDate(event.target.value)}/>
        <TextField id="outlined-basic" variant="outlined" type="date" label="Return Date" defaultValue="2017-05-24"
        onChange={event => setReturnDate(event.target.value)}/>
        <TextField id="outlined-basic" variant="outlined" type="number" label="People" 
        onChange={event => setNumPpl(event.target.value)}/>
        <TextField select id="outlined-basic" variant="outlined" label='Transportation'
        onChange={event => setTransport(event.target.value)} defaultValue={false}>
          <MenuItem key='1' value={true}>Yes</MenuItem>
          <MenuItem key='2' value={false}>No</MenuItem>
        </TextField>
        <TextField id="outlined-basic" variant="outlined" label="Name"
        onChange={event => setName(event.target.value)}/>
        <Button variant="contained" color="primary" type="button" onClick={submitQuote}>Create a quote</Button>
      </form>
    </div>
    )
}
