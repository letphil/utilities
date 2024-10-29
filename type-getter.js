// https://jestjs.io/docs/getting-started
// Go over this

function typeGetter(payload) {
  // console.log("payload =", payload);
  let types = {};

  for (const key in payload) {
    // to - typeof
    const to = typeof payload[key];

    if (to === "object") {
      if (Array.isArray(payload[key])) {
        if (typeof payload[key][0] === "object") {
          const arrObjTypes = typeGetter(payload[key][0]);
          types[key] = JSON.stringify(arrObjTypes) + "[]";
        } else {
          types[key] = `${typeof payload[key][0]}[]`;
        }
      } else {
        const objTypes = typeGetter(payload[key]);
        types[key] = objTypes;
      }
    } else {
      types[key] = to; // string, number, boolean
    }
  }

  return types;
}
// const pl = {
//   name: "phil",
//   age: 36,
//   children: ["caesar", "nick"],
//   nationality: "korean",
//   skills: {
//     coding: 4,
//     boxing: 3,
//     cooking: 4,
//   },
// };
// const j = typeGetter(pl);
// console.log("j =", j);

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

const j = typeGetter(spotifySearchItem);
console.log("j =", j);

module.exports = typeGetter;
/**
 * {
 *  name: string
 *  age: number
 *  children: string[],
 *  nationality: string
 *  skills: object
 *
 * }
 * 
 * const pl = {
  name: "phil",
  age: 36,
  children: ["caesar", "nick"],
  nationality: "korean",
  skills: {
    coding: 4,
    boxing: 3,
    cooking: 4,
  },
};

const {
  name,
  age,
  dogsName = "Spike",
  skills: { coding },
} = pl;



console.log("coding =", coding);

const nums = [0, 1, 2, 3, 4];

const [j, x, a, three, four] = nums;

const getRandomUsers = async () => {
  const r = await fetch("https://randomuser.me/api");
  const j = await r.json();
  console.log("j =", j);
  const [ru] = j.results;
  const t = typeGetter(ru);
};

// getRandomUsers();


 */
