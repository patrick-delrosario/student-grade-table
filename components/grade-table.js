class GradeTable {
  constructor (tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades (grades) {
    var tBody = this.tableElement.querySelector("tbody");
    tBody.innerHTML = "";

    for (var i = 0; i < grades.length; i++) {
      var tRow = this.renderGradeRow(grades[i], this.deleteGrade);
      tBody.append(tRow);
    }

    if (grades != 0) {
      document.querySelector("p").classList.add("d-none");
    } else {
      document.querySelector("p").classList.remove("d-none");
    }
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
    btn.className = "btn btn-secondary";
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
