class Document {
  static numberOfRow = 1;
  static numberOfColumn = 1;
  static alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  static lastNumberofRow;
  static lastNumberofColumn;

  static isAnswerShown = false;

  static createTd(name, addTo) {
    let td = document.createElement("td");

    td.setAttribute("id", name);

    const box = document.getElementById(addTo);
    box.appendChild(td);
  }

  static createInputNumber(name, addTo) {
    let btn = document.createElement("input");

    btn.setAttribute("name", name);
    btn.setAttribute("type", "number");
    btn.setAttribute("id", "id" + name);

    btn.classList.add("form-control");

    const box = document.getElementById(addTo);
    box.appendChild(btn);
  }

  static createHeader(name, addTo) {
    let header = document.createElement("th");

    header.textContent = name;
    const box = document.getElementById(addTo);
    box.appendChild(header);

    this.numberOfColumn += 1;
  }

  static createRow(addTo, name) {
    let tbody = document.getElementById("tbody");

    let row = document.createElement("tr");
    row.setAttribute("id", this.numberOfRow);

    const box = document.getElementById(addTo);
    box.appendChild(row);

    let tdRow = document.createElement("td");
    tdRow.textContent = name;
    tdRow.setAttribute("id", "a" + this.numberOfRow);

    const box2 = document.getElementById(this.numberOfRow);
    box2.appendChild(tdRow);

    this.numberOfRow += 1;
  }

  static removeInputNumber(name) {
    const inputNumber = document.getElementById("id" + name);

    inputNumber.remove();
  }

  static removeTd(name) {
    const inputNumber = document.getElementById(name);

    inputNumber.remove();
  }

  static fill() {
    for (var row = 1; row < this.numberOfRow; row++) {
      for (var col = 0; col < this.numberOfColumn; col++) {
        if (col == 0) {
          this.createInputNumber("a" + row, "a" + row);
        } else {
          this.createTd(this.alphabet[col] + row, row);
          this.createInputNumber(
            this.alphabet[col] + row,
            this.alphabet[col] + row
          );
        }
      }
    }
    this.lastNumberofColumn = this.numberOfColumn;
    this.lastNumberofRow = this.numberOfRow;
  }

  static remove() {
    if (
      typeof this.lastNumberofColumn !== "undefined" ||
      typeof this.lastNumberofRow !== "undefined"
    ) {
      // the variable is defined
      for (var row = 1; row < this.lastNumberofRow; row++) {
        for (var col = 0; col < this.lastNumberofColumn; col++) {
          if (col == 0) {
            this.removeInputNumber("a" + row);
          } else {
            this.removeTd(this.alphabet[col] + row);
          }
        }
      }
    }
  }

  static createAnswerRow (answers) {
    let row = document.createElement('tr');
    row.setAttribute("id", this.numberOfRow);

    const box = document.getElementById('tbody');
    box.appendChild(row);

    let tdRow = document.createElement("td");

    const box2 = document.getElementById(this.numberOfRow);
    box2.appendChild(tdRow);


    for (const answer of answers){
      let tdRow = document.createElement("td");
      tdRow.textContent = answer;

      const box2 = document.getElementById(this.numberOfRow);
      box2.appendChild(tdRow);
    }
  }

  static removeAnswerRow() {
    if(this.isAnswerShown) {
      let answerRow = document.getElementById(this.numberOfRow);
      
      answerRow.remove();
    }
    this.isAnswerShown = false;
  }
}
