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

var text = d3.select("#filter-btn");
function handleChange() {
    var inputText = d3.select("#datetime")
    var inputvalue = inputText.property("value");
    output.text(reversedInput);
}
   
text.on("change", handleChange);

