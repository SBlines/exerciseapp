// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search(name) {
  var q = $('#query').val();
  //not using var q right now
  var request = gapi.client.youtube.search.list({
    q: name,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#ytresult').html('<pre>' + str + '</pre>');
  });
}