import React from "react";
import { readRemoteFile } from "react-papaparse";
import axios from "axios";
import TD from "./TD";

function Table() {
  //   console.log(csvJSON(csv));

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function getCSV(filename) {
      readRemoteFile(
        `https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/${filename}.csv`,
        {
          complete: (results) => {
            console.log("Results:", results);
            setData(results.data);
          },
        }
      );
    }

    getCSV("customers");
  }, []);

  data && console.log(data);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Genre</th>
          <th>Rating</th>
          <th>Reviews</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item) => {
            return <TD />;
          })}
      </tbody>
    </table>
  );
}

export default Table;
