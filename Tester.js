const cvr = require('./CvrLookup');


var firma = "Socialstyrelsen";

if (process.argv[2]!="") firma = process.argv[2];
console.log("Printer infomation ud fra det firma man søger efter fra CVRAPI")

var firmaObj = cvr.returnByName(firma, (resultat) => {
  console.log(resultat); 
  

});


/*
efter node Tester.js skriver du det firma du søger efter og den vil slå det op i cvrapi.dk
*/