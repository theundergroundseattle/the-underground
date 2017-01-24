// var hi = alert('hello');
//
// hi;
SC.initialize({
  client_id: 'YOUR_CLIENT_ID',
  redirect_uri: 'http://example.com/callback'
});

var tracks = [{id: 290}, {id: 291}, {id: 292}];

SC.connect().then(function() {
  SC.post('/playlists', {
    playlist: { title: 'My Playlist', tracks: tracks }
  });
});
