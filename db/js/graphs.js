/* dependencies */
const plotly = require('plotly.js'),
      $ = require('jquery'),
      app = require('electron').remote,
      dialog = app.dialog,
      fs = require('fs');

/* load templates */
$('#nav').load("templates/nav.html");

$('#load-btn').click(function() {

  dialog.showOpenDialog(function (fileNames) {
    // fileNames is an array that contains all the selected
   if(fileNames === undefined){
    console.log("No file selected");
   } else {
    readFile(fileNames[0]);
   }
  });
});


function readFile(filepath){
  fs.readFile(filepath, 'utf-8', function (err, data) {
    if(err){
      alert("An error ocurred reading the file :" + err.message);
      return;
    }
    makeGraphs(data);
  });
}

function makeGraphs(data) {
  console.log(data);
}