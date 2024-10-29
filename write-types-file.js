const fs = require("fs");

function writeTypesFile(fileName, typeName, content) {
  return fs.writeFileSync(
    `./out/${fileName}`,
    `type ${typeName} = ` +
      JSON.stringify(content, null, 2).replace(/\"/g, "").replace(/\\/g, "")
  );
}

// writeTypesFile("spotify-item-type.ts", "SpotifySearchItem", spotifySearchItem);

module.exports = writeTypesFile;
