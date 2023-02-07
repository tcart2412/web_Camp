// import logo from './logo.svg';
import './App.css';
import {
	createBrowserRouter,
	RouterProvider
} from "react-router-dom"

import HomeIndex from './home';
import AboutPage from './about';

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeIndex />
	}, {
		path: "/about",
		element: <AboutPage />
	}
])

export default function App() {
	return (
		<div className='App'>
			<RouterProvider router={router}/>
		</div>
	)
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;
