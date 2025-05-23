# IEEE SusTech Student Branch - Project Team - Front End

Here I will upload my progress on learning React.js, Redux and Tailwind on a set schedule. I am attempting to build a music player to apply what I learn along the way.

[<span>
<img width='100' src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' />
</span>](https://react.dev/)
[<span>
<img width='100' src='https://media.zeemly.com/zeemly/product/tailwind-css.png' />
</span>](https://tailwindcss.com)
[<span>
<img width='100' src='https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png' />
</span>](https://redux.js.org/)

## Week One - Intro to Tailwind, React props and state management :

Example below shows Tailwind classes and passing a property value to a custom React component
```javascript react
function App() {
	return (
		<div className="grid justify-center text-center h-screen overflow-hidden">
      		// Here I apply tailwind classes to style the div to be rendered
			<h1>Music Player Demo</h1>
			<Cover />
			<ButtonPanel theme={"light"} />
      			// Here I pass a prop to a custom component
		</div>
	);
}
```
Example below shows React state management using an arrow function component
```javascript react
const ButtonPanel = ({ theme }) => {
const [play, setPlay] = useState(true);
// The function setPlay is bound to the play variable
	return (
		/*
		Code ...
               */
	       <Button
			onClick={() => {
				setPlay(!play);
                        // Here we use the setPlay function to change the state of our component
			}}
			icon={play ? FaPlay() : FaPause()}
		/>
		/*
		Code ...
		*/
```
## Week Two - Tailwind config file and customizations, Tailwind dark mode, and more React components :
The tailwind config file is a js file, that allows you to define custom properties for stylistic choices that can be made throug Tailwind. It also allows you to override already pre-defined properties.
The example below shows custom break-point media query for 'extra small screens'

### tailwind.config.js
```javascript
module.exports = {
	darkMode: "class",
	// This is an explicit definition for dark mode being a manually toggleable class
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xsm: "510px",
			// We see here an example of a custom tailwind class
			// This class in particular is for a screen media query
		},
		extend: {},
	},
	plugins: [],
};

```
We can apply that 'xsm' class with whatever stylistic choice we want applied at the breakpoint, like this
```html
<div className="mr-12 xsm:mr-6">foo bar</div>
<!-- As an example, we change the margin-right value if the break-point is detected -->
```
As for applying dark mode to a page, you simply toggle the class 'dark' on a parent of an element which you desire the mode to be applied on
A very easy approach is just toggling the class on the body tag of the html
```javascript react
<button title="Toggle Theme" className="text-3xl mr-5 p-1 {...etc}"
	onClick={() => {
		if (tm === "light") {
			setTheme("dark");
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
			setTheme("light");
		}
	}}
>
	{tm === "light" ? BsMoon() : CgSun()}
</button>
```

## Week Three - Redux for state management :
This week I learned about the 'Store' on Redux, with which we manage state in our app. This store acts like a front-end database or repository, for all state variations to the web app.
For example, in my web app, we can see when the audio player's state changes from playing to paused, or from looping to not.
This feature allows us to better debug the front-end on our web apps, by seeing what variations occured to the app's state along the way to a bug's manifestation.

We identify types of actions we imagine would change the state
### src/actionTypes.js
```javascript
const HOME = "Home";
const SONGS = "Tracks";
const PLAYLISTS = "Playlists";
const EQUALIZER = "Equalizer";

const IS_PLAYING = "Playing";
const IS_PAUSED = "Paused";
const IS_LOOPING = "Looping";
const IS_NOT_LOOPING = "NotLooping";
const VOL_CHNG = "VolumeChanged";

const IS_DARK = "DarkMode";
const IS_LIGHT = "LightMode";

const pages = { HOME, SONGS, PLAYLISTS, EQUALIZER };
const audioStates = {
	IS_PLAYING,
	IS_PAUSED,
	IS_LOOPING,
	IS_NOT_LOOPING,
	VOL_CHNG,
};
const theme = { IS_DARK, IS_LIGHT };

export { pages, audioStates, theme };
```
We then create a reducer function that handles the different actions to state, and responds with an update to state
### src/reducer.js
```javascript
import * as actions from "./actionTypes";

let ACTION_COUNT = 0;

const reducer = (state = [], action) => {
	switch (action.type) {
		case actions.pages:
			return [
				...state,
				{
					actionNum: ++ACTION_COUNT,
					navigated: action.payload.description,
				},
			];
		case actions.audioStates:
			return [
				...state,
				{
					actionNum: ++ACTION_COUNT,
					playerMode: action.payload.description,
				},
			];
		case actions.theme:
			return [
				...state,
				{
					actionNum: ++ACTION_COUNT,
					theme: action.payload.description,
				},
			];
		default:
			return state;
	}
};

export default reducer;
```
We then pass this reducer function as an argument to the store (as well as an identifier for the dev tools extension if you want it)
To take a small look at the store's content at any point, turn on your browser's dev tools, and check out the console
### src/store.js
```javascript
import reducer from "./reducer";
import { legacy_createStore as createStore } from "redux";

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
```
We can create action creator functions for different actions (Not necessary, just a good practice)
### src/components/actionCreator.jsx
```javascript
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
```
To send the actions to the store, and by extension the reducer that handles it, we use the store.dispatch() function
Here is an example
### src/components/Nav.jsx
```javascript
const dispatchPage = page => {
	store.dispatch(navAction(page));
	console.log(store.getState());
};
const dispatchTheme = theme => {
	store.dispatch(themeAction(theme));
	console.log(store.getState());
};
```
For a simple idea of what the store looks like after every state change, check out your browser console
If you want a more in-depth look, get a Redux browser extension ([Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/), [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)). Then take a look the Redux window on your browser's dev tools

## Week Four - Connecting React and Redux
Now that we are familiar with the workflow of Redux (the actions, dispatching, and the reducer function), we now have the liberty to do away with manipulating state locally in a component. Instead, we can determine the behaviour of a component based on the state in our store.
To start, we connect our store to our application, and make it "visible" for all components. To do that, we wrap our ```<App />``` in a ```Provider``` with a 'store' prop.
### src/index.js
```javascript react
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const root = createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
```
Now, everything down the DOM tree that is descendant of the App can access the store
In order to update state, we know we need to dispatch an action. However, now that we have connected our store to our app, we use a specific function provided by the 'react-redux' module, namely, ```useDispatch()```.
In order to "read" state, to update and re-render our components, we use ```useSelector(state)```
### src/components/Nav.jsx
``` javascript react
import { useDispatch, useSelector } from "react-redux";

const Nav = () => {
	const dispatch = useDispatch();
	const expanded = useSelector(state => state.navbar);
	const themeSelector = useSelector(state => state.theme);
	const pageSelector = useSelector(state => state.page);
```
So let's say we want to change the theme of our application. We'll have to dispatch an action that updates state with the theme opposite to the current, which will look something like this
### src/components/Nav.jsx
```javascript react
<button
	onClick={() => {
		if (themeSelector === themeCheck.IS_LIGHT) {
			dispatch(toggleTheme(themeCheck.IS_DARK));
		} else {
			dispatch(toggleTheme(themeCheck.IS_LIGHT));
		}
	}}
>
```
Now, we need to update our react application to accommodate for the state update in the store. Say we want to display the Sun icon when the theme is light, and the Moon crescent icon when it's dark
So we can do something like this
### src/components/Nav.jsx
```javascript react
{themeSelector === themeCheck.IS_LIGHT
	? CgSun()
	: BsMoon()
}
```
So we have a pattern that's similar to setters to and getters. Where we "set" an update to the state, and we "get" the data of the state.
<hr/>

### Using the Redux devtools allows us to see this play out in a really fun manner, where we "time-travel" to each instance of state update.
### Try changing something on the page, then going back to the prior state.
### Now navigate to the devtools window. Find the tab titled 'State', and look at the list to the left.
![1](https://user-images.githubusercontent.com/81387641/166805275-ac11ea9a-184c-4a6a-85f8-bdb3011ecedb.png)

### If you hover over an item on the list, you will have the option to Jump. Click around on these list items, and see what happens
![2](https://user-images.githubusercontent.com/81387641/166805447-e54f9a26-9fd8-4775-a67c-ed959321ecb1.png)
