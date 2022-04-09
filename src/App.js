import ButtonPanel from "./components/ButtonPanel";
import Cover from "./components/Cover";

function App() {
	return (
		<div className="grid justify-center text-center h-screen overflow-hidden">
			<h1>Music Player Demo</h1>
			<Cover />
			<ButtonPanel theme={"light"} />
		</div>
	);
}

export default App;
