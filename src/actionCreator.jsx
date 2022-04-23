import * as actions from "./actionTypes";
import Cover from "./components/Cover";
import ButtonPanel from "./components/ButtonPanel";
import Equalizer from "./components/Equalizer";
import Songs from "./components/Songs";
import Playlists from "./components/Playlists";

const navAction = page => ({
	type: actions.pages,
	payload: {
		description: page,
	},
});

const audioAction = toggle => ({
	type: actions.audioStates,
	payload: {
		description: toggle,
	},
});

const themeAction = colorTheme => ({
	type: actions.theme,
	payload: {
		description: colorTheme,
	},
});

const goPage = page => {
	switch (page) {
		case actions.pages.HOME:
			return (
				<>
					<h1 className="text-5xl">Music Player Demo</h1>
					<Cover />
					<ButtonPanel />
				</>
			);
		case actions.pages.SONGS:
			return <Songs />;
		case actions.pages.PLAYLISTS:
			return <Playlists />;
		case actions.pages.EQUALIZER:
			return <Equalizer />;
		default:
			return (
				<>
					<Cover />
					<ButtonPanel />
				</>
			);
	}
};

export { goPage, navAction, audioAction, themeAction };
