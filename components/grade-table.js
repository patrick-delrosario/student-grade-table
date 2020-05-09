class GradeTable {
  constructor (tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades (grades) {
    var tBody = this.tableElement.querySelector("tbody");
    tBody.innerHTML = "";
    for (var i = 0; i < grades.length; i++) {
      var row = document.createElement("tr");
      var name = document.createElement("td");
      var course = document.createElement("td");
      var grade = document.createElement("td");
      name.textContent = grades[i].name;
      course.textContent = grades[i].course;
      grade.textContent = grades[i].grade;

      tBody.append(row, name, course, grade);
  }}
}
