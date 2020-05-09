class GradeForm {
  constructor (formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener("submit", this.handleSubmit);
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    event.preventDefault();
    var data = new FormData(event.target);
    var studentName = data.get("name");
    var studentCourse = data.get("course");
    var studentGrade = data.get("grades");
    this.createGrade(studentName, studentCourse, studentGrade);
    event.target.reset();
  }
}
