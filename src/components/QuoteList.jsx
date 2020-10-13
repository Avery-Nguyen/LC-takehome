import React from 'react'
import '../style/quoteList.scss';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,  }from '@material-ui/core';

export default function QuoteList() {
  return (
    <div className="quote-list">
      <h1>Quote List</h1>
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
            <TableRow>
            <TableCell>123354t65</TableCell>
              <TableCell>Avery</TableCell>
              <TableCell>Calgary</TableCell>
              <TableCell>$1000</TableCell>
            </TableRow>
            <TableRow>
            <TableCell>765432</TableCell>
              <TableCell>Bob</TableCell>
              <TableCell>Edmonton</TableCell>
              <TableCell>$10000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
