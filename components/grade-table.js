class GradeTable {
  constructor (tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades (grades) {
    var tBody = this.tableElement.querySelector("tbody");
    tBody.innerHTML = "";
    for (var i = 0; i < grades.legnth; i++) {
      tBody.append(this.renderGradeRow(grades[i][1], this.deleteGrade));
    }
    /*for (var i = 0; i < grades.length; i++) {
      var row = document.createElement("tr");
      var name = document.createElement("td");
      var course = document.createElement("td");
      var grade = document.createElement("td");

      name.textContent = grades[i].name;
      course.textContent = grades[i].course;
      grade.textContent = grades[i].grade;

      tBody.append(row, name, course, grade);
    }*/
  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {
    var dRow = document.createElement("tr")
    var dName = document.createElement("td");
    var dCourse = document.createElement("td");
    var dGrade = document.createElement("td");
    var operation = document.createElement("td");
    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.addEventListener("click", function () {
      deleteGrade(data.id);
    })

    dName.textContent = data.name;
    dCourse.textContent = data.course;
    dGrade.textContent = data.grade;

    operation.append(btn);
    dRow.append(dName, dCourse, dGrade, operation);

    return dRow
  }
}
