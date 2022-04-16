import {
	FaPause,
	FaPlay,
	FaForward,
	FaBackward,
	FaVolumeUp,
	FaVolumeDown,
} from "react-icons/fa";
import { RiRepeatLine, RiRepeatOneLine } from "react-icons/ri";
import Button from "./Button";
import { useState } from "react";
import shelter from "./tracks/shelter.mp3";

const ButtonPanel = () => {
	const [play, setPP] = useState(true);
	const [loop, setLoop] = useState(false);
	const addZERO = x => {
		return (parseInt(x, 10) < 10 ? "0" : "") + x;
	};
	return (
		<div className="block">
			<input
				type="range"
				min={Number(0.0)}
				max={Number(100.0)}
				value={Number(0.0)}
				className="block w-full cursor-pointer"
				onChange={() => {
					let input = document.getElementById("daSlider");
					let audio = document.querySelector("audio");
					audio.currentTime = input.value;
				}}
				id="daSlider"
			></input>
			<audio
				onLoadedMetadataCapture={() => {
					let input = document.getElementById("daSlider");
					let audio = document.querySelector("audio");
					let endDur = document.getElementById("enDur");
					input.max = audio.duration;
					audio.volume = 0.5;
					endDur.innerHTML =
						Math.trunc(
							document.querySelector("audio").duration / 60
						) +
						":" +
						Math.trunc(
							document.querySelector("audio").duration % 60
						);
				}}
				onEnded={() => {
					setPP(true);
				}}
				onTimeUpdate={() => {
					let input = document.getElementById("daSlider");
					let audio = document.querySelector("audio");
					let durSpan = document.getElementById("stDur");
					durSpan.innerHTML = `<span>${Math.trunc(
						audio.currentTime / 60
					)}</span>:<span>${addZERO(
						Math.trunc(audio.currentTime % 60)
					)}</span>`;
					input.value = Math.trunc(audio.currentTime);
				}}
				loop={loop}
			>
				<source src={shelter}></source>
			</audio>
			<div className="w-full relative mb-3">
				<span id="stDur" className="absolute left-0">
					<span>0</span>:<span>00</span>
				</span>
				<span id="enDur" className="absolute right-0"></span>
			</div>
			<button
				id="tglLoop"
				type="button"
				onClick={() => {
					setLoop(!loop);
				}}
				className="rounded-full hover:bg-gray-200 dark:hover:bg-gray-900  bg-white text-black dark:bg-black dark:text-white active:scale-90 shadow-lg text-xl p-3 mr-4"
			>
				{loop ? RiRepeatOneLine() : RiRepeatLine()}
			</button>
			<Button
				id={"revAud"}
				onClick={() => {
					let audio = document.querySelector("audio");
					if (audio.currentTime < 5) {
						audio.currentTime = 0;
					} else {
						audio.currentTime -= 5;
					}
				}}
				icon={FaBackward()}
			/>
			<Button
				id={"playAud"}
				onClick={() => {
					if (play) {
						document.querySelector("audio").play();
					} else {
						document.querySelector("audio").pause();
					}
					setPP(!play);
				}}
				icon={play ? FaPlay() : FaPause()}
			/>
			<Button
				id={"frdAud"}
				onClick={() => {
					let audio = document.querySelector("audio");
					if (audio.currentTime > audio.duration - 5) {
						audio.currentTime = 0;
					} else {
						audio.currentTime += 5;
					}
				}}
				icon={FaForward()}
			/>
			<button
				disabled={false}
				id="tglVol"
				onClick={() => {
					document
						.getElementById("volSlide")
						.classList.toggle("hidden");
					document
						.getElementById("volDown")
						.classList.toggle("hidden");
					document
						.getElementById("tglVol")
						.classList.toggle("absolute");
				}}
				className="h-13 ml-4 w-12 bottom-[105px] z-50 shadow-md p-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-900  bg-white text-black dark:bg-black dark:text-white"
			>
				<div className="h-4">{FaVolumeUp()}</div>
				<input
					id="volSlide"
					type="range"
					min={Number(0.0)}
					max={Number(100.0)}
					disabled={false}
					orient="vertical"
					onChange={() => {
						let audio = document.querySelector("audio");
						let slider = document.getElementById("volSlide");
						audio.volume = Number(slider.value / 100);
					}}
					className="h-32 my-2 hidden"
				/>
				<div id="volDown" className="h-4 hidden">
					{FaVolumeDown()}
				</div>
			</button>
		</div>
	);
};

export default ButtonPanel;
