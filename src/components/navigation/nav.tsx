import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid'
import { classNames } from '../../utils/html'

const user = {
	isSignedIn: false,
	name: 'Tom Cook',
	email: 'tom@example.com',
	imageUrl:
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
	{ name: 'Products', href: '/products' },
	{ name: 'Pricing', href: '/pricing' },
	{ name: 'Docs', href: '/docs' },
	{ name: 'Support', href: '/support' },
	{ name: 'About', href: '/about' },
]
const userNavigation = [
	{ name: 'Your Profile', href: '#' },
	{ name: 'Settings', href: '#' },
	{ name: 'Sign out', href: '#' },
]




export default function Example(props: { currentPage: string }) {
	const { colorMode, toggleColorMode } = useColorMode()

	const toggleLightDark = () => {

		if (colorMode === 'dark') {
			document.documentElement.classList.remove('dark');
		} else {
			document.documentElement.classList.add('dark')
		}

		toggleColorMode();
	};

	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
			<Disclosure as="nav" className={colorMode === 'dark' ? "bg-slate-700" : "bg-slate-200"}>
				{({ open }) => (
					<>
						<div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-7 lg:px-8">
							<div className="flex h-16 items-center justify-between">
								<div className="flex items-center">
									{/* Logo and branding */}
									<div>
										<a href="/" className="inline-flex text-sm items-center">
											<svg className={classNames('h-14 w-14', colorMode === 'dark' ? 'fill-indigo-200 hover:fill-white' : 'fill-indigo-800 hover:fill-indigo-500')} viewBox="-1.68 -1.68 59.36 59.36" id="Layer_1" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" transform="matrix(-1, 0, 0, 1, 0, 0)" stroke="#4A5568" strokeWidth="0.00056"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M43.6,33.4L41,33.2c-0.3-1.3-0.8-2.5-1.5-3.6l1.7-2c0.3-0.4,0.3-1,0-1.4l-2.3-2.4c2.1-2.2,4.3-5.3,4.3-8.8 c0-6.6-7.7-11.8-8.1-12c-0.3-0.2-0.8-0.2-1.1,0c-0.3,0.2-8.1,5.4-8.1,12c0,1.6,0.4,3.2,1.3,4.8h-1.2c-0.5,0-1,0.4-1,0.9l-0.2,2.7 c-1.2,0.3-2.4,0.8-3.5,1.4l-2.1-1.8c-0.4-0.3-1-0.3-1.4,0.1l-2.9,2.9c-0.4,0.4-0.4,1,0,1.4l1.7,2c-0.7,1.1-1.2,2.3-1.5,3.6l-2.6,0.2 c-0.5,0-0.9,0.5-0.9,1v4.1c0,0.5,0.4,1,0.9,1l2.5,0.2c0.3,1.3,0.8,2.5,1.5,3.7l-1.6,1.9c-0.3,0.4-0.3,1,0,1.4l2.9,2.9 c0.4,0.4,1,0.4,1.4,0.1l1.9-1.6c1.2,0.7,2.4,1.2,3.8,1.6l0.2,2.4c0,0.5,0.5,0.9,1,0.9h4.1c0.5,0,1-0.4,1-0.9l0.2-2.4 c1.3-0.3,2.6-0.9,3.8-1.6l1.9,1.6c0.4,0.3,1,0.3,1.4-0.1l2.9-2.9c0.4-0.4,0.4-1,0-1.4l-1.6-1.9c0.7-1.2,1.2-2.4,1.5-3.7l2.5-0.2 c0.5,0,0.9-0.5,0.9-1v-4.1C44.5,33.9,44.1,33.5,43.6,33.4z M34.4,5.2c1.7,1.2,6.6,5.3,6.6,9.9c0,3.2-2.4,6.1-4.4,8 c0,0-0.1,0.1-0.1,0.1l-0.1,0.1c-0.4,0.4-0.7,0.7-1.1,0.9v-9.2c0-0.6-0.4-1-1-1s-1,0.4-1,1v9.2c-1.1-0.9-2.5-2.3-3.7-3.9 c-1.3-1.8-1.9-3.6-1.9-5.3C27.8,10.5,32.7,6.5,34.4,5.2z M42.5,37.6l-2.4,0.2c-0.5,0-0.8,0.4-0.9,0.8c-0.3,1.6-0.9,3-1.8,4.4 c-0.2,0.4-0.2,0.9,0.1,1.2l1.5,1.7l-1.6,1.6l-1.7-1.5c-0.3-0.3-0.9-0.3-1.2-0.1c-1.3,0.9-2.8,1.5-4.4,1.8c-0.4,0.1-0.8,0.5-0.8,0.9 L29.1,51h-2.3l-0.2-2.2c0-0.5-0.4-0.8-0.8-0.9c-1.6-0.3-3.1-0.9-4.4-1.8c-0.4-0.3-0.9-0.2-1.2,0.1l-1.7,1.5l-1.6-1.6l1.5-1.7 c0.3-0.3,0.3-0.8,0.1-1.2c-0.9-1.3-1.5-2.8-1.8-4.4c-0.1-0.5-0.5-0.8-0.9-0.8l-2.4-0.2v-2.3l2.4-0.2c0.4,0,0.8-0.4,0.9-0.8 c0.3-1.5,0.9-2.9,1.8-4.2c0.3-0.4,0.2-0.9-0.1-1.2L16.9,27l1.6-1.6l1.9,1.7c0.3,0.3,0.8,0.3,1.2,0.1c1.3-0.9,2.7-1.4,4.2-1.7 c0.4-0.1,0.8-0.5,0.8-0.9l0.2-2.6h1.6c1.3,1.8,2.9,3.2,4,4.1c0,0,0.1,0,0.1,0.1c0.4,0.3,0.7,0.5,0.9,0.7v9.6c0,3-2.4,5.4-5.4,5.4 s-5.4-2.4-5.4-5.4c0-3,2.4-5.4,5.4-5.4c0.6,0,1-0.4,1-1s-0.4-1-1-1c-4.1,0-7.4,3.3-7.4,7.4c0,4.1,3.3,7.4,7.4,7.4s7.4-3.3,7.4-7.4 v-9.6c0.4-0.3,1.1-0.8,1.9-1.5l1.7,1.7l-1.6,1.9c-0.3,0.3-0.3,0.9-0.1,1.2c0.9,1.3,1.5,2.7,1.8,4.2c0.1,0.4,0.5,0.8,0.9,0.8l2.4,0.2 V37.6z"></path></g></svg>
										</a>
									</div>
									{/* Links for top navbar */}
									<div className="hidden md:block">
										<div className="ml-10 flex items-baseline space-x-6">
											{navigation.map((item) => (
												<a
													key={item.name}
													href={item.href}
													className={classNames(
														item.href === props.currentPage
															? 'bg-indigo-600 text-indigo-200 hover:text-indigo-400'
															: 'hover:bg-indigo-800 hover:text-white',
														colorMode === 'dark' ? "text-gray-200" : "text-gray-800",
														'rounded-md px-5 py-3 text-sm font-medium'
													)}
													aria-current={item.href === props.currentPage ? 'page' : undefined}
												>
													{item.name}
												</a>
											))}
										</div>
									</div>
								</div>
								<div className="hidden md:block">
									<div className="ml-4 flex items-center md:ml-6">
										<div className="flex-1">
											{useColorModeValue(<MoonIcon cursor="pointer" className="relative text-slate-200 fill-slate-400 w-6 h-6 m-4  hover:fill-indigo-300 focus:fill-white" onClick={toggleLightDark}></MoonIcon>, <SunIcon cursor="pointer" className="relative text-slate-200 fill-slate-400 w-6 h-6 m-4  hover:fill-indigo-300 focus:fill-white" onClick={toggleLightDark}></SunIcon>)}
										</div>
										{/* User Profile or Sign up button */}
										{user.isSignedIn ? (
											<Menu as="div" className="relative ml-3">
												<div>
													<Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-gray-800">
														<span className="absolute -inset-3.5" />
														<span className="sr-only">Open user menu</span>
														<img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
													</Menu.Button>
												</div>
												<Transition
													as={Fragment}
													enter="transition ease-out duration-100"
													enterFrom="transform opacity-0 scale-95"
													enterTo="transform opacity-100 scale-100"
													leave="transition ease-in duration-75"
													leaveFrom="transform opacity-100 scale-100"
													leaveTo="transform opacity-0 scale-95"
												>
													<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
														{userNavigation.map((item) => (
															<Menu.Item key={item.name}>
																{({ active }) => (
																	<a
																		href={item.href}
																		className={classNames(
																			active ? 'bg-gray-100' : '',
																			'block px-4 py-2 text-sm text-gray-700'
																		)}
																	>
																		{item.name}
																	</a>
																)}
															</Menu.Item>
														))}
													</Menu.Items>
												</Transition>
											</Menu>
										) : (
											<div className="inline-flex flex-row justify-center justify-items-center place-items-center">
												<a href="/login" className={classNames(colorMode === 'dark' ? "bg-gray-600 hover:bg-green-600 text-gray-300 hover:text-gray-100 hover:outline-gray-300" : "bg-gray-300 hover:bg-green-600 text-gray-800 hover:text-gray-100 focus:outline-indigo-200 hover:outline-indigo-100", "p-2 m-2 text-base rounded-md outline outline-0 outline-slate-500 hover:outline-2")}>
													Login
												</a>
												<span className={colorMode === 'dark' ? "text-white" : "text-black"}>/</span>
												<a href="/register" className={classNames(colorMode === 'dark' ? "bg-gray-600 hover:bg-green-600 text-gray-300 hover:text-gray-100 hover:outline-gray-300" : "bg-gray-300 hover:bg-green-600 text-gray-800 hover:text-gray-100 focus:outline-indigo-200 hover:outline-indigo-100", "p-2 m-2 text-base rounded-md outline outline-0 outline-slate-500 hover:outline-2")}>
													Sign Up
												</a>
											</div>
										)}


									</div>
								</div>
								<div className="-mr-2 flex md:hidden">
									{/* Mobile menu button */}
									<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
										<span className="absolute -inset-0.5" />
										<span className="sr-only">Open main menu</span>
										{open ? (
											<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
										) : (
											<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>
							</div>
						</div>
						{/* Mobile Menu */}
						<Disclosure.Panel className="md:hidden">
							<div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
								{navigation.map((item) => (
									<Disclosure.Button
										key={item.name}
										as="a"
										href={item.href}
										className={classNames(
											item.href === props.currentPage ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
											'block rounded-md px-3 py-2 text-base font-medium'
										)}
										aria-current={item.href === props.currentPage ? 'page' : undefined}
									>
										{item.name}
									</Disclosure.Button>
								))}
							</div>
							<div className="border-t border-gray-700 pb-3 pt-10">
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure >


		</>
	)
}