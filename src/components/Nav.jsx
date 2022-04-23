import { FaBars } from "react-icons/fa";
import { CgSun } from "react-icons/cg";
import { BsMoon } from "react-icons/bs";
import { RiEqualizerLine, RiPlayListLine } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { FiMusic } from "react-icons/fi";
import { useState } from "react";
import { pages, theme } from "./../actionTypes";
import { navAction, goPage, themeAction } from "./../actionCreator";
import store from "./../store";

const Nav = () => {
	const dispatchPage = page => {
		store.dispatch(navAction(page));
		console.log(store.getState());
	};
	const dispatchTheme = theme => {
		store.dispatch(themeAction(theme));
		console.log(store.getState());
	};

	const [pageNav, setPage] = useState({
		home: true,
		songs: false,
		playlists: false,
		equalizer: false,
	});
	const [tm, setTheme] = useState("light");
	let expanded = false;

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
					if (expanded) {
						return;
					}
					const spans = document.getElementsByClassName("customSpan");
					for (let i = 0; i < spans.length; i++) {
						spans.item(i).classList.add("opacity-0");
						spans.item(i).classList.remove("opacity-100");
					}
				}}
				className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[55px] hover:w-[275px] overflow-y-auto text-center h-screen overflow-x-hidden bg-gray-100 dark:bg-gray-900 opacity-95 transition-all duration-500"
			>
				<ul className="text-left dark:text-white flex flex-col h-full">
					<li className="flex flex-row items-center">
						<button
							title="Toggle Menu"
							className="mr-5 p-1 text-3xl hover:bg-gray-300 dark:hover:bg-gray-700 hover:duration-200 hover:transition-colors"
							onClick={() => {
								if (!expanded) {
									expanded = true;
								} else {
									expanded = false;
								}
								let nav = document.getElementById("leNav");
								if (nav.classList.contains("w-[275px]")) {
									nav.classList.remove("w-[275px]");
									nav.classList.toggle("w-[55px]");
								} else {
									nav.classList.remove("w-[55px]");
									nav.classList.toggle("w-[275px]");
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
								if (tm === "light") {
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
							if (tm === "light") {
								homeLi.classList.add("border-l-black");
							} else {
								homeLi.classList.add("border-l-white");
							}
						}}
					>
						<button
							title="Home"
							className="mr-5 p-1 text-3xl hover:bg-gray-300 dark:hover:bg-gray-700 hover:duration-200 hover:transition-colors"
							onClick={() => {
								Object.keys(pageNav).forEach(
									page => (pageNav[page] = false)
								);
								setPage({ ...pageNav, home: true });
								dispatchPage(pages.HOME);
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
								if (tm === "light") {
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
							if (tm === "light") {
								songsLi.classList.add("border-l-black");
								songsLi.classList.add("dark:border-l-white");
							} else {
								songsLi.classList.add("border-l-white");
							}
						}}
					>
						<button
							title="Songs List"
							className="mr-5 p-1 text-3xl hover:bg-gray-300 dark:hover:bg-gray-700 hover:duration-200 hover:transition-colors"
							onClick={() => {
								Object.keys(pageNav).forEach(
									page => (pageNav[page] = false)
								);
								setPage({ ...pageNav, songs: true });
								dispatchPage(pages.SONGS);
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
								if (tm === "light") {
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
							if (tm === "light") {
								playLi.classList.add("border-l-black");
								playLi.classList.add("dark:border-l-white");
							} else {
								playLi.classList.add("border-l-white");
							}
						}}
					>
						<button
							title="Playlists"
							className="mr-5 p-1 text-3xl hover:bg-gray-300 dark:hover:bg-gray-700 hover:duration-200 hover:transition-colors"
							onClick={() => {
								Object.keys(pageNav).forEach(
									page => (pageNav[page] = false)
								);
								setPage({ ...pageNav, playlists: true });
								dispatchPage(pages.PLAYLISTS);
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
								if (tm === "light") {
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
							if (tm === "light") {
								equalLi.classList.add("border-l-black");
								equalLi.classList.add("dark:border-l-white");
							} else {
								equalLi.classList.add("border-l-white");
							}
						}}
					>
						<button
							title="Equalizer"
							className="mr-5 p-1 text-3xl hover:bg-gray-300 dark:hover:bg-gray-700 hover:duration-200 hover:transition-colors"
							onClick={() => {
								Object.keys(pageNav).forEach(
									page => (pageNav[page] = false)
								);
								setPage({ ...pageNav, equalizer: true });
								dispatchPage(pages.EQUALIZER);
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
							title="Toggle Theme"
							className="text-3xl mr-5 p-1 hover:bg-gray-300 dark:hover:bg-gray-700 hover:duration-200 active:rotate-180 focus:transition-transform focus:duration-700"
							onClick={() => {
								if (tm === "light") {
									setTheme("dark");
									document.body.classList.add("dark");
									dispatchTheme(theme.IS_DARK);
								} else {
									document.body.classList.remove("dark");
									setTheme("light");
									dispatchTheme(theme.IS_LIGHT);
								}
							}}
						>
							{tm === "light" ? BsMoon() : CgSun()}
						</button>
						<span className="text-2xl customSpan opacity-0 transition-[opacity] duration-500">
							Theme
						</span>
					</li>
				</ul>
			</nav>
			{pageNav.home && goPage(pages.HOME)}
			{pageNav.songs && goPage(pages.SONGS)}
			{pageNav.playlists && goPage(pages.PLAYLISTS)}
			{pageNav.equalizer && goPage(pages.EQUALIZER)}
		</>
	);
};

export default Nav;
