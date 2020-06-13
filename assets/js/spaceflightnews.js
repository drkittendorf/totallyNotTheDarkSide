// Document .ready so this only fires after the entire .document is loaded
$(document).ready(function () {
  //spaceflight SEARCH Button FUNCTION Expression activated on click
  $("#SFNsubmit").on("submit", function (e) {
    // preventing the page from refreshing
    e.preventDefault();
    console.log("from submitted");
    $(".newsDiv").empty();
    // simulate the search button click
    searchSpaceFlightNews();
    $("#spaceFlightUserInput").val("");
  });

  // spaceFlight CLEAR Button FUNCTION Expression activated on Click
  $(".spaceFlightClear").on("click", function (e) {
    // preventing the page from refreshing
    e.preventDefault();
    // empties results from output div
    $(".newsDiv").empty();
  });

  //Function Declaration to perform ajax search of api with user input
  function searchSpaceFlightNews() {
    // empties div before the new search query populates
    // $(".newsDiv").empty();
    //take form input sets string value and trims empty space
    let userInput = $("#spaceFlightUserInput").val().trim();
    // testing to be sure userInput is populating
    console.log(userInput);
    //ajax call to Space Flight News
    $.ajax({
      url: `https://spaceflightnewsapi.net/api/v1/articles?search=${userInput}`, //${userInput} links to from input
      method: "GET",
      // .then enabled because Ajax returs a promise Object
    }).then((response) => {
      // Checking to see if the call returned a valid response and return error message
      if (response.docs.length == "0") {
        console.log("broken search");
        $(".newsDiv").append(
          "Sorry. Your Search didn't return any results. Please try another search term."
        );
      } else {
        console.log(response);
        // Loop to return selected data from SFN returned search object -
        for (var i = 0; i < response.docs.length; i++) {
          let title = response.docs[i].title;
          let link = response.docs[i].url;
          let pDate = response.docs[i].published_date;

          console.log(pDate);

          // Dynamically creates div and format info for selected object data
          let titleDiv = $("<div>").text(title).attr("class", "newsResults");
          let linkDiv = $("<a>")
            .attr("href", link)
            .attr("target", 'target="_blank"')
            .text("Click here for Article!");
          let pDateDiv = $("<div>").text(pDate);

          // console.log(response.media_type);

          //Appends dynamically created Divs and format info from above to the div on front page, in the order listed
          $(".newsDiv").append(titleDiv);
          $(".newsDiv").append(linkDiv);
          $(".newsDiv").append(pDateDiv);
        } //closes for loop
      } // closes if else
    }); //closes ajax .then
  } //close of spaceflightnews function
}); //close on ready
