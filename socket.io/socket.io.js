var stream = twitter.stream('statuses/filter', { track: 'javascript' });

io.on('connect', function(socket) {
  stream.on('tweet', function(tweet) {
    socket.emit('tweets', tweet);
  });
});
