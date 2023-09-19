
function addColumn() {
  if(Document.isEmpty("columnId")) {
    return;
  }

  Document.removeAnswerRow();

  var headerValue = document.getElementById("columnId").value;

  Document.createHeader(headerValue, 'header');

  Document.remove();
  Document.fill();
  Document.clearInputs('columnId');

}

function addRow() {
  if(Document.isEmpty("rowId")) {
    return;
  }
  
  Document.removeAnswerRow();

  var rowValue = document.getElementById("rowId").value;

  Document.createRow('tbody', rowValue);

  Document.remove();
  Document.fill();
  Document.clearInputs('rowId');

}

function calculate() {
  Calculations.calculateWADM();
  Document.isAnswerShown = true;
}


