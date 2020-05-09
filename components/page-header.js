class PageHeader {
  constructor (headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage (newAverage) {
    var mean = this.headerElement.querySelector("span");
    mean.innerHTML = newAverage
  }
}
