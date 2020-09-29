(function () {
    console.log("sanity check myself:", $);

    $("#submit-btn").on("click", function () {
        // console.log('yo gimme gimme got clicked');
        var userInput = $("input[name=user-input]").val(); // we have a multitude of ways of grabbing our input field we deliberately chose the name attribute so that we see another way of doing this, also the name attribute will become important in the near future ;)
        console.log("user wants information on:", userInput);
        var albumOrArtist = $("select").val();
        console.log("user want either artist or album?", albumOrArtist);
        // var myHtml = "";
        var newUrl;

        //var baseUrl = 'https://spicedify.herokuapp.com/spotify';

        $.ajax({
            //this will make the request to our proxi API
            url: "https://spicedify.herokuapp.com/spotify",
            method: "GET",
            data: {
                query: userInput,
                type: albumOrArtist,
            },
            success: function (responseData) {
                // this function runs, when we have received a successful response from the API
                // console.log('response from the Spotify API:', responseData);

                var response = responseData.artists || responseData.albums;
                // console.log('Response:', response);

                // console.log('response.next:', response.next);
                var nextUrl =
                    response.next &&
                    response.next.replace(
                        "api.spotify.com/v1/search",
                        "spicedify.herokuapp.com/spotify"
                    );
                console.log("next Url to make the request to:", nextUrl);

                // compose the html
                var myHtml = newUrl;
                $("#results-message").show();

                for (var i = 0; i < response.items.length; i++) {
                    // console.log('response.items[i]', response.items[i]);
                    //check if the result we are currently looping over has an image
                    var imgUrl = "./default.jpg";
                    if (response.items[i].images.length > 0) {
                        imgUrl = response.items[i].images[0].url;
                    }

                    // console.log(
                    //     'the image Url for' +
                    //         response.items[i].name +
                    //         ' would be:',
                    //     imgUrl
                    // );
                    myHtml +=
                        "<div class='results-spotify'><a href='" +
                        response.items[i].external_urls.spotify +
                        "'></div>" +
                        "<img src='" +
                        imgUrl +
                        "'/>" +
                        "<div class='name'>" +
                        response.items[i].name +
                        "</div></a></div>";
                }

                $("#results-message").html("Results for " + userInput + ":");

                $("#results-container").html(myHtml);

                if (!nextUrl) {
                    $("#more-btn").hide();
                } else {
                    $("#more-btn").show();
                }
            } else {
                $("#results-message").html("No results for " + userInput + ":");
                $("#results-container").html(""); // or newUrl
            }

                }
            },
        });

    }); // closes the submit btn event handler
})(); // iife closed
