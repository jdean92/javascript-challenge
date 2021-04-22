// from data.js
var tableData = data;

console.log(tableData)

var tbody = d3.select("tbody")

console.log(data)

data.forEach(=>(tabledata) {

var row = tbody.append("tr");
    Object.values(tableData).forEach(=>(value) {

        var cell = row.append("td");
        cell.text(value);
    });
});

var 
   



