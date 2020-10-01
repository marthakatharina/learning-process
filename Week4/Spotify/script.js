(function () {
    // console.log("sanity check myself:", $);
    $("#more-btn").hide();
    var newUrl;

    $("#submit-btn").on("click", function () {
        // console.log('yo gimme gimme got clicked');
        var userInput = $("input[name=user-input]").val(); // we have a multitude of ways of grabbing our input field we deliberately chose the name attribute so that we see another way of doing this, also the name attribute will become important in the near future ;)
        // console.log("user wants information on:", userInput);
        var albumOrArtist = $("select").val();
        // console.log("user want either artist or album?", albumOrArtist);
        var myHtml = "";

        var baseUrl = "https://spicedify.herokuapp.com/spotify";

        ajaxDataRequest(baseUrl);

        $("#more-btn").on("click", function () {
            ajaxDataRequest(newUrl);
        });

        function ajaxDataRequest(requestData) {
            $.ajax({
                //this will make the request to our proxi API
                url: requestData,
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
                    // console.log("next Url to make the request to:", nextUrl);

                    // compose the html
                    newUrl = nextUrl;
                    $("#results-message").show();

                    if (response.items.length > 0) {
                        for (var i = 0; i < response.items.length; i++) {
                            // console.log('response.items[i]', response.items[i]);
                            //check if the result we are currently looping over has an image
                            var imgUrl = "no-image.jpg";
                            if (response.items[i].images.length > 0) {
                                imgUrl = response.items[i].images[1].url;
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

                        $("#results-message").html(
                            "Results for " + userInput + ":"
                        );

                        $("#results-container").html(myHtml);

                        if (!nextUrl) {
                            $("#more-btn").hide();
                        } else {
                            $("#more-btn").show();
                        }
                    }

                    function moreResults() {
                        $.ajax({
                            url: newUrl,
                            method: "GET",
                            success: function (responseData) {
                                responseData =
                                    responseData.artists || responseData.albums; //eliminate one layer of nestedness
                                loadNextUrl(responseData.next);
                                $("#results-container").append(
                                    ajaxDataRequest(responseData.items)
                                );
                                checkScrollPosition();
                            },
                        });
                    }

                    function loadNextUrl(nextUrl) {
                        newUrl =
                            nextUrl &&
                            nextUrl.replace(
                                "api.spotify.com/v1/search",
                                "spicedify.herokuapp.com/spotify"
                            );
                        if (!newUrl) {
                            $("#more-btn").hide();
                        } else {
                            $("#more-btn").show();
                        }
                    }

                    function checkScrollPosition() {
                        if (location.search.indexOf("scroll=infinite") > -1) {
                            $("#more-btn").hide();
                            if (
                                $(window).height() + $(document).scrollTop() >=
                                $(document).height() - 100
                            ) {
                                var hasScrolledToBottom = true;
                            }
                            if (hasScrolledToBottom) {
                                if (newUrl) {
                                    moreResults();
                                }
                            } else {
                                setTimeout(checkScrollPosition, 500);
                            }
                        }
                    }
                },
            });
        }
    }); // closes the submit btn event handler
})(); // iife closed
