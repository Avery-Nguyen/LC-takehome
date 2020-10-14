import React, { useEffect, useState} from 'react'
import axios from "axios"

// date_created: "2020-10-14T02:10:19.125Z"
// departure_date: "2020-12-17"
// departure_location: "Indang"
// destination_date: "2021-01-24"
// destination_location: "Kabasalan"
// email: "test@test,com"
// first_name: "Avery"
// id: 8
// last_name: "Nguyen"
// num_people: 4
// phone: "4031234567"
// price: "$4547.14"
// transportation: true
// user_id: 1
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
