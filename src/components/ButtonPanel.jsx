import { FaPause, FaPlay, FaForward, FaBackward } from "react-icons/fa";
import Button from "./Button";
import { useState } from "react";
import shelter from "./tracks/shelter.mp3";
import Volume from "./Volume";

const ButtonPanel = ({ theme }) => {
	const [play, setPP] = useState(true);
	return (
		<div className="block">
			<input
				type="range"
				min={Number(0.0)}
				max={Number(100.0)}
				value={Number(0.0)}
				className="range block w-full"
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
					input.max = audio.duration;
				}}
				onEnded={() => {
					setPP(true);
				}}
				onTimeUpdate={() => {
					let input = document.getElementById("daSlider");
					let audio = document.querySelector("audio");
					input.value = Math.trunc(audio.currentTime);
				}}
			>
				<source src={shelter}></source>
			</audio>
			<Volume
				upOrDown="down"
				onClick={() => {
					document.querySelector("audio").volume -= 0.2;
				}}
			/>
			<Button
				onClick={() => {
					let audio = document.querySelector("audio");
					if (audio.currentTime < 5) {
						audio.currentTime = 0;
					} else {
						audio.currentTime -= 5;
					}
				}}
				icon={FaBackward()}
				theme={theme}
			/>
			<Button
				onClick={() => {
					if (play) {
						document.querySelector("audio").play();
					} else {
						document.querySelector("audio").pause();
					}
					setPP(!play);
				}}
				icon={play ? FaPlay() : FaPause()}
				theme={theme}
			/>
			<Button
				onClick={() => {
					let audio = document.querySelector("audio");
					if (audio.currentTime > audio.duration - 5) {
						audio.currentTime = 0;
					} else {
						audio.currentTime += 5;
					}
				}}
				icon={FaForward()}
				theme={theme}
			/>
			<Volume
				upOrDown="up"
				onClick={() => {
					document.querySelector("audio").volume += 0.2;
				}}
			/>
		</div>
	);
};

export default ButtonPanel;
