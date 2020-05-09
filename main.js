var table = document.querySelector("table");
var gradeTable = new GradeTable(table);

var head = document.querySelector("header");
var average = new PageHeader(head);

var app = new App(gradeTable, average);
app.start();
