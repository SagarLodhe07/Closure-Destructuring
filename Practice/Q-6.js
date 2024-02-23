// 6. You are developing a music playlist management system. Implement functions that leverage closures
// and higher-order functions to perform common playlist operations.

// Task 1: Create a function createPlaylist that takes a playlist name as a parameter and returns a closure. This
// closure should allow adding and listing songs for the given playlist.

// Task 2: Create a function addSong that takes a song name and artist as parameters and adds the song to the
// specified playlist. Use the closure created in TASK 1.

// Task 3: Create a function listSongs that lists all the songs in a specified playlist. Use the closure created in the
// Task 1

createPlaylist = (name) => {
  let playlist = {
    name: name,
    songs: [],

    addSong: function (song, artist) {
      this.songs.push({ song: song, artist: artist });
      console.log(`${song} by ${artist} added to ${this.name}`);
    },

    listSongs: function () {
      console.log(`Songs in ${this.name}:`);
      this.songs.forEach(function (songObj) {
        console.log(`- ${songObj.song} by ${songObj.artist}`);
      });
    },
  };

  return playlist;
};

function addSong(playlist, song, artist) {
  playlist.addSong(song, artist);
}

const myPlaylist = createPlaylist("My Favourites");

addSong(myPlaylist, "Song1", "Artist 1");
addSong(myPlaylist, "Song2", "Artist 2");
addSong(myPlaylist, "Song3", "Artist 3");

myPlaylist.listSongs();
