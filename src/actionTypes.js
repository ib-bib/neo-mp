const HOME = "Home";
const SONGS = "Tracks";
const PLAYLISTS = "Playlists";
const EQUALIZER = "Equalizer";

const IS_PLAYING = "Playing";
const IS_PAUSED = "Paused";
const IS_LOOPING = "Looping";
const IS_NOT_LOOPING = "NotLooping";

const IS_DARK = "DarkMode";
const IS_LIGHT = "LightMode";

const pages = { HOME, SONGS, PLAYLISTS, EQUALIZER };
const PlayerState = { IS_PLAYING, IS_PAUSED };
const LooperState = { IS_LOOPING, IS_NOT_LOOPING };
const VolumeState = {};
const navbarState = { expanded: "Expanded" };
const theme = { IS_DARK, IS_LIGHT };

export { pages, PlayerState, LooperState, VolumeState, navbarState, theme };
