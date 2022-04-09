import { FaVolumeUp, FaVolumeDown } from "react-icons/fa";

const Volume = ({ upOrDown, onClick }) => {
	return (
		<button
			onClick={onClick}
			type="button"
			className="mx-4 shadow-md p-4 rounded-full"
		>
			{upOrDown === "up" ? FaVolumeUp() : FaVolumeDown()}
		</button>
	);
};

export default Volume;
