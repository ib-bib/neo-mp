import { FaBars } from "react-icons/fa";
import { RiEqualizerLine, RiPlayListLine } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { FiMusic } from "react-icons/fi";
import { CgSun } from "react-icons/cg";
import { BsMoon } from "react-icons/bs";
import { toggleTheme, navAction, goPage, expandBar } from "../actionCreator";
import { theme as themeCheck, pages, navbarState } from "../actionTypes";
import { useDispatch, useSelector } from "react-redux";

const Nav = () => {
	const dispatch = useDispatch();
	const expanded = useSelector(state => state.navbar);
	const themeSelector = useSelector(state => state.theme);
	const pageSelector = useSelector(state => state.page);

	let atHome = () => pageSelector === pages.HOME;
	let atSongs = () => pageSelector === pages.SONGS;
	let atPlaylists = () => pageSelector === pages.PLAYLISTS;
	let atEqualizer = () => pageSelector === pages.EQUALIZER;

	const customFn = () => {
		const btn = document.getElementById("tglThemeBtn");
		const observer = new MutationObserver(() => {
			document.body.classList.toggle("dark");
		});
		observer.observe(btn, { subtree: true, childList: true });
	};
	window.addEventListener("load", customFn);

	return (
		<>
			<nav
				id="leNav"
				onMouseEnter={() => {
					const spans = document.getElementsByClassName("customSpan");
					for (let i = 0; i < spans.length; i++) {
						spans.item(i).classList.remove("opacity-0");
						spans.item(i).classList.add("opacity-100");
					}
				}}
				onMouseLeave={() => {
					const spans = document.getElementsByClassName("customSpan");
					if (expanded === navbarState.expanded) {
						for (let i = 0; i < spans.length; i++) {
							spans.item(i).classList.remove("opacity-0");
							spans.item(i).classList.add("opacity-100");
						}
						return;
					}
					for (let i = 0; i < spans.length; i++) {
						spans.item(i).classList.add("opacity-0");
						spans.item(i).classList.remove("opacity-100");
					}
				}}
				className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[55px] hover:w-[255px] overflow-y-auto text-center h-screen overflow-x-hidden bg-gray-100 dark:bg-gray-900 opacity-95 transition-all duration-500"
			>
				<ul className="text-left dark:text-white flex flex-col h-full">
					<li className="flex flex-row items-center">
						<button
							title="Toggle Menu"
							className="mr-5 p-1 text-3xl hover:bg-gray-300 dark:hover:bg-gray-700 hover:duration-200 hover:transition-colors"
							onClick={() => {
								let nav = document.getElementById("leNav");
								if (nav.classList.contains("w-[255px]")) {
									nav.classList.remove("w-[255px]");
									nav.classList.toggle("w-[55px]");
									dispatch(expandBar("collapsed"));
								} else {
									nav.classList.remove("w-[55px]");
									nav.classList.toggle("w-[255px]");
									dispatch(expandBar(navbarState.expanded));
								}
							}}
						>
							{FaBars()}
						</button>
						<span className="text-2xl customSpan opacity-0 transition-[opacity] duration-500">
							Menu
						</span>
					</li>
					{/* Separator */}
					<div className="dark:bg-white bg-black w-full mt-3 mb-5 h-[1px]"></div>
					{/* Separator */}
					<li
						id="HomeLi"
						className="mb-7 flex flex-row items-center cstmLi border-l-2 border-l-black dark:border-l-white"
						onFocus={() => {
							let liItems =
								document.getElementsByClassName("cstmLi");
							for (let i = 0; i < liItems.length; i++) {
								if (themeSelector === themeCheck.IS_LIGHT) {
									liItems
										.item(i)
										.classList.remove("border-l-2");
									liItems
										.item(i)
										.classList.remove("border-l-black");
								} else {
									liItems
										.item(i)
										.classList.remove("border-l-2");
									liItems
										.item(i)
										.classList.remove("border-l-white");
								}
							}
							let homeLi = document.getElementById("HomeLi");
							homeLi.classList.add("border-l-2");
							homeLi.classList.add("border-l-black");
							homeLi.classList.add("dark:border-l-white");
						}}
					>
						<button
							title="Home"
							className="mr-5 p-1 text-3xl hover:bg-gray-300 dark:hover:bg-gray-700 hover:duration-200 hover:transition-colors"
							onClick={() => {
								dispatch(navAction(pages.HOME));
							}}
						>
							{IoHome()}
						</button>
						<span className="text-2xl customSpan opacity-0 transition-[opacity] duration-500">
							Home
						</span>
					</li>
					<li
						id="SongsLi"
						className="mb-7 flex flex-row items-center cstmLi"
						onFocus={() => {
							let liItems =
								document.getElementsByClassName("cstmLi");
							for (let i = 0; i < liItems.length; i++) {
								if (themeSelector === themeCheck.IS_LIGHT) {
									liItems
										.item(i)
										.classList.remove("border-l-2");
									liItems
										.item(i)
										.classList.remove("border-l-black");
								} else {
									liItems
										.item(i)
										.classList.remove("border-l-2");
									liItems
										.item(i)
										.classList.remove("border-l-white");
								}
							}
							let songsLi = document.getElementById("SongsLi");
							songsLi.classList.add("border-l-2");
							songsLi.classList.add("border-l-black");
							songsLi.classList.add("dark:border-l-white");
						}}
					>
						<button
							title="Songs List"
							className="mr-5 p-1 text-3xl hover:bg-gray-300 dark:hover:bg-gray-700 hover:duration-200 hover:transition-colors"
							onClick={() => {
								dispatch(navAction(pages.SONGS));
							}}
						>
							{FiMusic()}
						</button>
						<span className="customSpan text-2xl opacity-0 transition-[opacity] duration-500">
							Tracks
						</span>
					</li>
					<li
						id="PlayLi"
						className="mb-7 flex flex-row items-center cstmLi"
						onFocus={() => {
							let liItems =
								document.getElementsByClassName("cstmLi");
							for (let i = 0; i < liItems.length; i++) {
								if (themeSelector === themeCheck.IS_LIGHT) {
									liItems
										.item(i)
										.classList.remove("border-l-2");
									liItems
										.item(i)
										.classList.remove("border-l-black");
								} else {
									liItems
										.item(i)
										.classList.remove("border-l-2");
									liItems
										.item(i)
										.classList.remove("border-l-white");
								}
							}
							let playLi = document.getElementById("PlayLi");
							playLi.classList.add("border-l-2");
							playLi.classList.add("border-l-black");
							playLi.classList.add("dark:border-l-white");
						}}
					>
						<button
							title="Playlists"
							className="mr-5 p-1 text-3xl hover:bg-gray-300 dark:hover:bg-gray-700 hover:duration-200 hover:transition-colors"
							onClick={() => {
								dispatch(navAction(pages.PLAYLISTS));
							}}
						>
							{RiPlayListLine()}
						</button>
						<span className="text-2xl customSpan opacity-0 transition-[opacity] duration-500">
							Playlists
						</span>
					</li>
					<li
						id="EquaLi"
						className="mb-7 flex flex-row items-center cstmLi"
						onFocus={() => {
							let liItems =
								document.getElementsByClassName("cstmLi");
							for (let i = 0; i < liItems.length; i++) {
								if (themeSelector === themeCheck.IS_LIGHT) {
									liItems
										.item(i)
										.classList.remove("border-l-2");
									liItems
										.item(i)
										.classList.remove("border-l-black");
								} else {
									liItems
										.item(i)
										.classList.remove("border-l-2");
									liItems
										.item(i)
										.classList.remove("border-l-white");
								}
							}
							let equalLi = document.getElementById("EquaLi");
							equalLi.classList.add("border-l-2");
							equalLi.classList.add("border-l-black");
							equalLi.classList.add("dark:border-l-white");
						}}
					>
						<button
							title="Equalizer"
							className="mr-5 p-1 text-3xl hover:bg-gray-300 dark:hover:bg-gray-700 hover:duration-200 hover:transition-colors"
							onClick={() => {
								dispatch(navAction(pages.EQUALIZER));
							}}
						>
							{RiEqualizerLine()}
						</button>
						<span className="text-2xl customSpan opacity-0 transition-[opacity] duration-500">
							Equalizer
						</span>
					</li>
					{/* Toggle Theme */}
					<li className="mt-auto flex flex-row items-center">
						<button
							id="tglThemeBtn"
							title="Toggle Theme"
							className="text-3xl mr-5 p-1 hover:bg-gray-300 dark:hover:bg-gray-700 hover:duration-200 active:rotate-180 focus:transition-transform focus:duration-700"
							onClick={() => {
								if (themeSelector === themeCheck.IS_LIGHT) {
									dispatch(toggleTheme(themeCheck.IS_DARK));
								} else {
									dispatch(toggleTheme(themeCheck.IS_LIGHT));
								}
							}}
						>
							{themeSelector === themeCheck.IS_LIGHT
								? CgSun()
								: BsMoon()}
						</button>
						<span className="text-2xl customSpan opacity-0 transition-[opacity] duration-500">
							Theme
						</span>
					</li>
				</ul>
			</nav>
			{atHome() && goPage(pages.HOME)}
			{atSongs() && goPage(pages.SONGS)}
			{atPlaylists() && goPage(pages.PLAYLISTS)}
			{atEqualizer() && goPage(pages.EQUALIZER)}
		</>
	);
};

export default Nav;
