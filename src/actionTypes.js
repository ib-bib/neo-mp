const HOME = "Home";
const SONGS = "Tracks";
const PLAYLISTS = "Playlists";
const EQUALIZER = "Equalizer";

const IS_PLAYING = "Playing";
const IS_PAUSED = "Paused";
const IS_LOOPING = "Looping";
const IS_NOT_LOOPING = "NotLooping";
const VOL_CHNG = "VolumeChanged";

const IS_DARK = "DarkMode";
const IS_LIGHT = "LightMode";

const pages = { HOME, SONGS, PLAYLISTS, EQUALIZER };
const audioStates = {
	IS_PLAYING,
	IS_PAUSED,
	IS_LOOPING,
	IS_NOT_LOOPING,
	VOL_CHNG,
};
const theme = { IS_DARK, IS_LIGHT };

export { pages, audioStates, theme };
