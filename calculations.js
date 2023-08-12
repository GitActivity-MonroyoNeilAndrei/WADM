class Calculations extends Document{
  static calculateWADM () {
    if(this.isAnswerShown){
      return 0;
    }
    var product = 0;
    var arrayOfProducts = new Array();
    for(let col = 1; col <= this.numberOfColumn - 1; col++) {
      var product = 0;
      for(let row = 1; row < this.numberOfRow; row++) {
        var factor = document.getElementById('id' + 'a' + row).value;
        var entity = document.getElementById('id' + this.alphabet[col] + row).value;

        var td = document.getElementById(this.alphabet[col] + row);

        td.textContent = factor * entity;

        product += factor * entity;
      }
      arrayOfProducts.push(product);
      product = 0;
    }
    
    Document.createAnswerRow(arrayOfProducts);

  }
}
