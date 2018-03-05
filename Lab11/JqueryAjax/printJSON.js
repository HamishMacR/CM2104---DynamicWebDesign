$(function(){
  alert("document ready");

  $('#searchform').submit(function(){
    //get current value and add to items list
    var searchterms = $("#searchterms").val();
    //call our search youtube function
    getResultsFromOMBD(searchterms);
    return false;
  });
});

function getResultsFromOMBD(searchterms) {
  //call youtube API using ajax
  //build url for the request
  var url = "http://www.omdbapi.com/?i=tt3896198&apikey=479361d1" + searchterms;
  //use jquery json shortcut
  $.getJSON(url, function(jsondata) {
    //handle the results
    printJSON(jsondata);
  });

}

function printJSON(jsondata) {
  //prints the JSON to the screen
  var normal = JSON.stringify(jsondata);
  $('#resultsbox').append("<p>" + normal + "</p>");

}


 // function addItemToList (item){
   // $('#results').append("<li>" +item + "</li>");
// }
