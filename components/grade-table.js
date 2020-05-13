class GradeTable {
  constructor (tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
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

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {
    var dRow = document.createElement("tr")
    var dName = document.createElement("td");
    var dCourse = document.createElement("td");
    var dGrade = document.createElement("td");
    var Operation = document.createElement("td");

    var btn = document.createElement("button");
    btn.classList.add("btn btn-danger");
    btn.addEventListener("click", function () {
      deleteGrade(data.id);
    })

    dName.textContent = grades[i].name;
    dCourse.textContent = grades[i].course;
    dGrade.textContent = grades[i].grade;
    Operation.innerHTML = btn

    dRow.append(dName, dCourse, dGrade, Operation);

    return dRow
  }
}
