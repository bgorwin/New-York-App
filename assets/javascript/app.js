$(document).ready(function() {

  $("#clear").click(function(event) {
    console.log("clicked");
    event.preventDefault();
    $(".results .panel-body").empty();
  });

  //listen for click on submit button to send full query to api
  $("#search").click(function(event) {
    console.log("clicked");
    event.preventDefault();
    $(".results .panel-body").empty();

    // event.preventDefault() can be used to prevent an event’s default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // Here we grab the text from the input box
    var searchTerm = $("#searchTerm").val();
    var numRecords = $("#numRecords").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();
    console.log(searchTerm);
    console.log(numRecords);
    console.log(startYear);
    console.log(endYear);

    // Here we construct our URL
    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of movie-view

    //------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += "?" + $.param({
      "api-key": "6c258eaa33ae4d8685107f914f12e0da",
      "q": searchTerm,
      "page": 0,
      "begin_date": "20010101",
      "end_date": "20020101"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(response) {

      console.log(response.response);
      //append onto panel body the results
      //overall article div to hold all of the info returned based on our inputs in the form
      var articles = $("<div class='searchResults'>");

      //loop to display our chosen number of articles
      for (var i = 0; i < numRecords; i++) {
        var individualArticle = $("<div class ='article'>");

        var title = $("<div>");
        $(title).text(response.response.docs[numRecords].headline.main);
        individualArticle.append(title);

        var author = $("<div>");
        $(author).text(response.response.docs[0].keywords[0].value);
        individualArticle.append(author);

        var section = $("<div>");
        $(section).text(response.response.docs[0].section_name);
        individualArticle.append(section);

        var publicationDate = $("<div>");
        $(publicationDate).text(response.response.docs[0].pub_date);
        individualArticle.append(publicationDate);

        var url = $("<div>");
        $(url).text(response.response.docs[0].web_url);
        $(url).attr("href", response.response.docs[0].web_url);
        individualArticle.append(url);

        //final append
        $(articles).append(individualArticle);

      }

      $(".content").append(articles);

    }).fail(function(err) {
      throw err;
    });
    // -----------------------------------------------------------------------
  });
});
