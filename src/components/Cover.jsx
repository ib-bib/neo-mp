import shelter from "./shelter.jpg";

const Cover = ({ size }) => {
	return (
		<div>
			<img
				// src="https://i1.sndcdn.com/artworks-000189983181-azrg5q-t500x500.jpg"
				src={shelter}
				alt="Shelter"
			/>
		</div>
	);
};

export default Cover;
