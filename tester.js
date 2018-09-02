var library = {
 tracks: { t01: { id: "t01",
                  name: "Code Monkey",
                  artist: "Jonathan Coulton",
                  album: "Thing a Week Three" },
           t02: { id: "t02",
                  name: "Model View Controller",
                  artist: "James Dempsey",
                  album: "WWDC 2003"},
           t03: { id: "t03",
                  name: "Four Thirty-Three",
                  artist: "John Cage",
                  album: "Woodstock 1952"}
         },
 playlists: { p01: { id: "p01",
                     name: "Coding Music",
                     tracks: ["t01", "t02"]
                   },
              p02: { id: "p02",
                     name: "Other Playlist",
                     tracks: ["t03"]
                   }
            }
}


var printPlaylists = function() {
 for (var keyVar in library.playlists) {
 console.log(keyVar + ': ' + library.playlists[keyVar].name + " - " + library.playlists[keyVar].tracks.length + " tracks");
 }
}
//////////
var printTracks = function () {
 for (var keyTracks in library.tracks) {
 console.log(keyTracks + ': ' + library.tracks[keyTracks].name + " by " + library.tracks[keyTracks].artist + " (" + library.tracks[keyTracks].album + ")");
 }
}
/////////

// // prints a list of tracks for a given playlist, in the form:
// // p01: Coding Music - 2 tracks
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)
// var printPlaylist = function (playlistId) {
//  console.log(playlistId + ": " + library.playlists[playlistId].name + " - " + library.playlists[playlistId].tracks.length + " tracks");
//  for(let i = 0; i < library.playlists[playlistId].tracks.length; i++){
//    var current = library.tracks[library.playlists[playlistId].tracks[i]];
//    //console.log(current);
//    console.log(current.id + ": " + current.name + " by " + current.artist + " (" +current.album + ")");
//    //console.log(library.playlists[playlistId].tracks[i]);
//  }
// }

// ///////

// // adds an existing track to an existing playlist

// var addTrackToPlaylist = function (trackId, playlistId) {
  
// console.log(trackId + library.playlists[addTrackToPlaylist])

// //   library.tracks["trackId"];
// //   library.playlists["playlistId"]

// //   library.playlists.track = ["trackId"];

// // console.log(library.playlistId["trackId"]);

// }
//  //console.log("t03", "p02")
// addTrackToPlaylist("t03", "p02")