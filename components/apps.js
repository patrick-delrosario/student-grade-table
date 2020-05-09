class App {
  constructor(gradeTable, pageHeader) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
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
    this.pageHeader.updateAverage(avg);
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
  start() {
    this.getGrades();
  }
}
