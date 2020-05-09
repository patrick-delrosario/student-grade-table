var table = document.querySelector("table");
var gradeTable = new GradeTable(table);

var header = document.querySelector("header");
var average = new PageHeader(header);

var form = document.querySelector("form");
var addGrade = new GradeForm(form)

var app = new App(gradeTable, average, addGrade);
app.start();
