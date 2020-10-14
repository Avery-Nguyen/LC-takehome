import React, { useEffect, useState} from 'react'
import axios from "axios"

export default function QuoteDetails(props) {

 const [details, setDetails] = useState({})
// console.log(props.quoteID);
 useEffect(() => {
  axios.post(`/api/quotesdetails`, {
    quote_id: props.quoteID
  })
    .then((res) => {
      // console.log(res)
      console.log(res.data.quote[0], 'sql response')
      setDetails(res.data.quote[0]);

    });
 }, [props.quoteID])

  return (
    <div>
      Name: {details.first_name}
      <br/>
      Phone Number: {details.phone}
      <br/>
      Email: {details.email}
      <br/>
      Destination: {details.destination_location}
      <br/>
      Departure: {details.departure_location}
      <br/>
      Price: {details.price}
      <br/>
      Date of Departure: {details.departure_date}
      <br/>
      Date of Return: {details.destination_date}
      <br/>
      Number of Travellers: {details.num_people}
      <br/>
      Transporation Needed?: {details.transportation ? 'Yes' : 'No'}
    </div>
  )
}
