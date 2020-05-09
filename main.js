var table = document.querySelector("table");
var gradeTable = new GradeTable(table);

var header = document.querySelector("header");
var average = new PageHeader(header);

var app = new App(gradeTable, average);
app.start();
