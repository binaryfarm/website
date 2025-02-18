'use strict';
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom"
import {
	ChakraProvider,
	extendTheme,
	theme as chakraTheme,
} from '@chakra-ui/react'
import App from './pages/app.tsx'
import ErrorPage from './pages/error.tsx';
import './index.css'
import Login from './pages/login.tsx';
const { Button } = chakraTheme.components

const theme = extendTheme({
	initialColorMode: 'system',
	useSystemColorMode: true,
	components: {
		Button,
	},
	colors: {
		brand: {
			//900: '#1a365d',
			//800: '#153e75',
			//700: '#2a69ac',
		}
	},
	styles: {
		global: (props: { colorMode: string, theme: string }) => ({
			'html, body': {
				fontSize: 'sm',
				color: props.colorMode === 'dark' ? 'white' : 'black',
				lineHeight: 'tall',
			},
			a: {
				color: props.colorMode === 'dark' ? 'text-indigo-300' : 'text-indigo-800',
			},
		}),
	},
});

const router = createBrowserRouter([
	{
		path: "/",
		element: <App page='/' />,
		errorElement: <ErrorPage />
	},
	{
		path: "/products",
		element: <App page="/products" />,
		errorElement: <ErrorPage />
	},
	{
		path: "/login",
		element: <Login />,
		errorElement: <ErrorPage />
	}
]);

ReactDOM.createRoot(document.getElementById('app')!).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>
	,
)