// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search(name) {
  //not using var q right now
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: name,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#ytresult').html('<pre>' + str + '</pre>');
  });
}