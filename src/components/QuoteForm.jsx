import React from 'react'
import { TextField, MenuItem, Button }from '@material-ui/core';

export default function QuoteForm() {
  return (
    <div>
      <h1>Quick Quote</h1>
      <form>
        <TextField id="outlined-basic" variant="outlined" label="From"/>
        <TextField id="outlined-basic" variant="outlined" label="Destination"/>
        <TextField id="outlined-basic" variant="outlined" type="date" label="Depart Date" defaultValue="2017-05-24"/>
        <TextField id="outlined-basic" variant="outlined" type="date" label="Return Date" defaultValue="2017-05-24"/>
        <TextField id="outlined-basic" variant="outlined" type="number" label="People" />
        <TextField select id="outlined-basic" variant="outlined" label='Transportation'>
          <MenuItem key='1' value={true}>Yes</MenuItem>
          <MenuItem key='1' value={false}>No</MenuItem>
        </TextField>
        <TextField id="outlined-basic" variant="outlined" label="Name"/>
        <Button variant="contained" color="primary" type="submit">Create a quote</Button>
      </form>
    </div>
    )
}
