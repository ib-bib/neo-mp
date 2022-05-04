import * as actions from "./actionTypes";
import Cover from "./components/Cover";
import ButtonPanel from "./components/ButtonPanel";
import Equalizer from "./components/Equalizer";
import Songs from "./components/Songs";
import Playlists from "./components/Playlists";
import SecBtnPnl from "./components/SecBtnPnl";

const navAction = page => ({
	type: actions.pages,
	payload: page,
});

const expandBar = expansion => ({
	type: actions.navbarState,
	payload: expansion,
});

const playerToggle = toggle => ({
	type: actions.PlayerState,
	payload: toggle,
});

const looperToggle = toggle => ({
	type: actions.LooperState,
	payload: toggle,
});

const changeVolume = () => ({
	type: actions.VolumeState,
	payload: "volumeChanged",
});

const toggleTheme = theme => ({
	type: actions.theme,
	payload: theme,
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
			return (
				<>
					<Songs />
					<SecBtnPnl />
				</>
			);
		case actions.pages.PLAYLISTS:
			return (
				<>
					<Playlists />
					<SecBtnPnl />
				</>
			);
		case actions.pages.EQUALIZER:
			return (
				<>
					<Equalizer />
					<SecBtnPnl />
				</>
			);
		default:
			return (
				<>
					<h1 className="text-5xl">Music Player Demo</h1>
					<Cover />
					<ButtonPanel />
				</>
			);
	}
};

export {
	goPage,
	navAction,
	expandBar,
	playerToggle,
	looperToggle,
	changeVolume,
	toggleTheme,
};
