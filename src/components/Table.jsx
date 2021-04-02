import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: "100%",
  },
});

async function getData(name) {
  let data = await fetch(`/data/${name}.csv`)
    .then(response => response.text())
    .then(csvString => {
      const data = {
        columnNames: [],
        rows: [],
      };
      const rows = csvString.split('\n');
      if (rows.length > 1) {
        data['columnNames'] = rows[0].split(',')
        rows.splice(0, 1);
        rows.map(row => data['rows'].push(row.split(',')));
      }
      return data;
    });
  return data
}

export default function BasicTable() {
  const classes = useStyles();

  const [data, setData] = useState({
    columnNames: [],
    rows: [],
  })

  useEffect(() => {
    getData('customers').then(data => setData(data));
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {data.columnNames.map((name, i) => <TableCell key={i}>{name}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.rows.map((row, i) => (
            <TableRow key={i}>
              {row.map((cellData, i) => <TableCell key={i}>{cellData}</TableCell>)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
