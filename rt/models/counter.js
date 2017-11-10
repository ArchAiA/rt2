var request = require('request');
var fs = require('fs');
const mongoose = require('mongoose');






var docTypeList = ['N', 'PR', 'FR', 'O', 'SR', 'PS'];
var initialDate = '01%2F01%2F2010';  //or '01/01/2010'
var baseURL = 'https://api.data.gov/regulations/v3/documents.json?api_key=hEDGLWEULDJF9i24ic68uG0NKda2veflW1DjsVEA';
var dateRange = ''


//Get Current Date in API Format

//If a 1-digit number is given as part of a date, this function converts it to a two digit number (ex. 1 become 01)
function twoDigit(n) {
  return n<10? '0' + n: ''+n;
}


//Gets the Date Range and Modifies It into a Format that Works with the External Regulatory Database API
function getDateRange() {
  var today = new Date();
  var month = twoDigit(today.getMonth() + 1);
  var day = twoDigit(today.getDate());

  var currentDate = '-' + month  + '%2F' + day + '%2F' + today.getFullYear();
  dateRange = initialDate + currentDate;
}
//Gets the Date Range and Modifies It into a Format that Works with the External Regulatory Database API


//Gets the Number of Each Type of Notice For Paging Due To Rate Limiting Per API Call
function getCounts(noticeType, dateRange, callback) {
  request(baseURL + '&countsOnly=1&dct=' + noticeType + '&pd=' + dateRange, function(err, res, body) {
    var count = JSON.parse(body).totalNumRecords; //WHY IS THIS HERE?  IS THE VARIABLE USED ANYWHERE?
    console.log(noticeType, err, count);
    // callback(noticeType, err, body);
})}
//Gets the Number of Each Type of Notice For Paging Due To Rate Limiting Per API Call


//Callback Function for Getting the Number of Each Notice Type.  Once the Counting Has Been Finished This Logs To Console
function assigner(noticeType, err, data) {
  console.log(noticeType + data);
  // return count;
}
//Callback Function for Getting the Number of Each Notice Type.  Once the Counting Has Been Finished This Logs To Console





//MAIN: Calls the Functions
getDateRange();  //Is this necessary?  Can it just be the second parameter fed into getCounts() below?
for(item in docTypeList) {
  // console.log(item);
  getCounts(docTypeList[item], dateRange, assigner);
}
//MAIN: Calls the Functions