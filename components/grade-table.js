class GradeTable {
  constructor (tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades (grades) {
    var tBody = this.tableElement.querySelector("tbody");
    for (var i = 0; i < grades.length; i++) {
      var row = document.createElement("tr");
      var fullName = document.createElement("td");
      var course = document.createElement("td");
      var grade = document.createElement("td");
      fullName.textContent = grades[i].name;
      course.textContent = grades[i].course;
      grade.textContent = grades[i].grade;

      $("tbody").append(row, fullName, course, grade);
  }}
}
