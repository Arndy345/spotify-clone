//USED TO HANDLE USER AUTHENTICATION BY USING SPOTIFY'S API
export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "20a8eba331264228a599d112d11693f8";

//SCOPES
//USED TO REQUEST FOR PERMISSIONS FROM SPOTIY TO
//CARRY OUT CERTAIN ACTIVITIES

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  var url = window.location.hash
    //GETS THR FIRST SUBSTRING
    .substring(1)
    .split("&")

    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
  return url;
};

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
