import React, { useState } from 'react'
import { TextField, MenuItem, Button }from '@material-ui/core';
import '../style/quoteForm.scss';
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}));

export default function QuoteForm() {
  const classes = useStyles();
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [numPpl, setNumPpl] = useState(null);
  const [transport, setTransport] = useState(false);
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

  const submitQuote = function () {
    if (name === '') {
      setError('Name cannot be blank')
    } else if (departure === '') {
      setError('Choose a departure location')
    } else if (destination === '') {
      setError('Choose a destination location')
    } else if ((departDate === '') ||(returnDate === '')) {
      setError('Please choose a date')
    } else if (numPpl === null) {
      setError('Select the amount of Travellers')
    } else {
      axios.post(`/api/createuser`, {
        name
      })
        .then((res) => {
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
            //would change to update state of other compoents instead of entire page refresh
            window.location.reload(true);
          })
    
        });

    };
  };
  const current = formatDate();
  
  return (
    <div className='quote-form'>
      <h1>Quick Quote</h1>
      <div className='error'>{error}</div>
      <form className={classes.root}>
        <div>
          {/* add api to search for airports codes only */}
          <TextField id="outlined-basic" variant="outlined" label="From" 
          onChange={event => setDeparture(event.target.value)} required/>
          <TextField id="outlined-basic" variant="outlined" label="Destination"
          onChange={event => setDestination(event.target.value)} required />
        </div>
        <div>
          <TextField id="outlined-basic" variant="outlined" type="date" label="Depart Date" defaultValue={current}
          onChange={event => setDepartDate(event.target.value)} required />
          <TextField id="outlined-basic" variant="outlined" type="date" label="Return Date" defaultValue={current}
          onChange={event => setReturnDate(event.target.value)} required />
        </div>
        <div>
          <TextField id="outlined-basic" variant="outlined" type="number" label="People" 
          onChange={event => setNumPpl(event.target.value)} required inputProps={{ min: 0}}/>
          <TextField select id="outlined-basic" variant="outlined" label='Transportation'
          onChange={event => setTransport(event.target.value)} defaultValue={false} required >
            <MenuItem key='1' value={true}>Yes</MenuItem>
            <MenuItem key='2' value={false}>No</MenuItem>
          </TextField>
        </div>
        <div className='button-div'>
          <TextField id="outlined-basic" variant="outlined" label="Name"
          onChange={event => setName(event.target.value)} required />
          <Button variant="contained" color="primary" type="button" onClick={submitQuote} >Create a quote</Button>
        </div>
      </form>
    </div>
    )
}
