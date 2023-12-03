/* make the API call */
FB.api(
  "/instagram_oembed",
  function (response) {
    if (response && !response.error) {
      /* handle the result */
      console.log(response);
    }
  }
);