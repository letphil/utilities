const typeGetter = require("./type-getter.js");
const writeTypesFile = require("./write-types-file.js");

/**
 * @param {string} fileName - name of file wanted output
 * @param {string} typeName - name of type wanting to be built
 * @param {object} payload - object to make types for
 * @description - function to output type of object to use in project
 * @returns {string} - stringify'd object with quotes not there
 *
 */
function makeTypes(fileName, typeName, payload) {
  const content = typeGetter(payload);
  writeTypesFile(fileName, typeName, content);
  return JSON.stringify(content).replace(/\"/g, "");
}

// const dog = {
//   name: "Luna",
//   color: "white",
//   size: "medium",
//   personality: "amazing",
//   friends: ["spike", "spot", "heffy"],
// };

// makeTypes("dog-type.ts", "Dog", dog);

const res = {
  tracks: {
    href: "https://api.spotify.com/v1/search?query=heaven&type=track&market=US&offset=0&limit=20",

    limit: 20,
    next: "https://api.spotify.com/v1/search?query=heaven&type=track&market=US&offset=20&limit=20",
    offset: 0,
    previous: null,
    total: 981,
  },
};

const spotifySearchItem = {
  album: {
    album_type: "album",
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2uYWxilOVlUdk4oV9DvwqK",
        },
        href: "https://api.spotify.com/v1/artists/2uYWxilOVlUdk4oV9DvwqK",
        id: "2uYWxilOVlUdk4oV9DvwqK",
        name: "Mitski",
        type: "artist",
        uri: "spotify:artist:2uYWxilOVlUdk4oV9DvwqK",
      },
    ],
    external_urls: {
      spotify: "https://open.spotify.com/album/2Cn1d2KgbkAqbZCJ1RzdkA",
    },
    href: "https://api.spotify.com/v1/albums/2Cn1d2KgbkAqbZCJ1RzdkA",
    id: "2Cn1d2KgbkAqbZCJ1RzdkA",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27334f21d3047d85440dfa37f10",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0234f21d3047d85440dfa37f10",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485134f21d3047d85440dfa37f10",
        width: 64,
      },
    ],
    is_playable: true,
    name: "The Land Is Inhospitable and So Are We",
    release_date: "2023-09-15",
    release_date_precision: "day",
    total_tracks: 11,
    type: "album",
    uri: "spotify:album:2Cn1d2KgbkAqbZCJ1RzdkA",
  },
  artists: [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/2uYWxilOVlUdk4oV9DvwqK",
      },
      href: "https://api.spotify.com/v1/artists/2uYWxilOVlUdk4oV9DvwqK",
      id: "2uYWxilOVlUdk4oV9DvwqK",
      name: "Mitski",
      type: "artist",
      uri: "spotify:artist:2uYWxilOVlUdk4oV9DvwqK",
    },
  ],
};

makeTypes(
  "spotify-search-item-type.ts",
  "SpotifySearchItem",
  spotifySearchItem
);

module.exports = makeTypes;
