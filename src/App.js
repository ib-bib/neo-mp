import ButtonPanel from "./components/ButtonPanel";
import Cover from "./components/Cover";
import Nav from "./components/Nav";

function App() {
	return (
		<div className="grid justify-center text-center h-screen overflow-y-auto bg-gray-300 dark:bg-gray-800 dark:text-white transition-colors duration-500">
			<Nav />
			<h1 className="text-5xl">Music Player Demo</h1>
			<Cover />
			<ButtonPanel />
		</div>
	);
}

export default App;
