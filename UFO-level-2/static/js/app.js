// from data.js
var tableData = data;
console.log(tableData)


var tbody = d3.select("tbody");

console.log(data);

data.forEach(function(tabledata) {

var row = tbody.append("tr");
    Object.values(tabledata).forEach(function(value) {

        var cell = row.append("td");
        cell.text(value);
    });
});

var filterButton = d3.select("#filter-btn");

function handleChange() {
    
    var inputText = d3.select("#datetime")
    var inputvalue = inputText.property("value");

    console.log(inputvalue);
    
    var filtered = data.filter(row =>{
        return row.datetime == inputvalue;
    });
    console.log(filtered)
    var tbody = d3.select("tbody");
    var table = d3.select("table");
    tbody.remove();
    tbody = table.append("tbody");
    filtered.forEach(function (tabledata) {
        console.log(tabledata)
        var row = tbody.append("tr");
        Object.values(tabledata).forEach(function(value) {

            var cell = row.append("td");
            cell.text(value);
        });
    });
}
   
filterButton.on("click", handleChange);





