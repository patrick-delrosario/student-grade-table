class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
  }

  handleGetGradesError(error) {
    console.error("error");
  }

  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var final = 0;
    for (var i = 0; i < grades.length; i++) {
      final += grades[i].grade;
    }
    var avg = final/grades.length;
    this.pageHeader.updateAverage(avg.toFixed(1));
  }

  getGrades() {
    $.ajax (
      {
      type: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      dataType: "json",
      headers: {
        "X-Access-Token": "yKye2vVs",
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
    })
  }

  handleCreateGradeError(error) {
    console.error("error")
  }

  handleCreateGradeSuccess() {
    this.getGrades();
  }

  createGrade(name, course, grade) {
    $.ajax(
      {
        method: "POST",
        url: "https://sgt.lfzprototypes.com/api/grades",
        dataType: "json",
        headers: {
          "X-Access-Token": "yKye2vVs",
        },
        data: {
          "name": name,
          "course": course,
          "grade": grade
        },
        success: this.handleCreateGradeSuccess,
        error: this.handleCreateGradeError,
      })
  }

  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
  }
}
