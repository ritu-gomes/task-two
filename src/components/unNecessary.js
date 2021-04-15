// Generate JSON Object
async function getData(name) {
  //const data = [];
  let data = await fetch(`/data/${name}.csv`)
    .then(response => response.text())
    .then(csvString => {
      const data = [];
      let rows = csvString.split('\n');
      if (rows.length > 1) {
        const columnNames = rows[0].split(',').map((row, index) => index + '<>' + row.trim());
        rows.splice(0, 1);

        rows.map(row => {
          const rowData = {};
          row = row.split(',');
          row.map((value, index) => {
            rowData[columnNames[index]] = value;
          });
          data.push(rowData);
        });
      }
      return data;
    });
  //return JSON.stringify(data);
  return data
}