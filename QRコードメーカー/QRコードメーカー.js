// Load Google Charts API
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Charts API is loaded
google.charts.setOnLoadCallback(generateQRCode);

function generateQRCode() {
  
 
// Get the input text
  var inputText = document.getElementById('textInput').value;

  // Create a data table with the input text
  var data = google.visualization.arrayToDataTable([
    ['Text', 'Value'],
    ['', inputText]
  ]);

  // Set chart options
  var options = {
    width: 200,
    height: 200
  };

  // Create a QR code chart
  var chart = new google.visualization.QRCode(document.getElementById('qrcode'));

  // Draw the chart with the input text and options
  chart.draw(data, options);
}