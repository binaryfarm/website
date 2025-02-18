'use strict'
import React from 'react'
import { classNames } from '../utils/html'
import { useColorMode } from '@chakra-ui/react'

const Jumbo = () => {
	const { colorMode } = useColorMode()
	return (
		<>
			<section>
				<div className="py-8 px-4 mx-auto xl:max-w-screen-xl 2xl:max-w-screen-2xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm text-center lg:py-16">
					<h1 className={classNames(colorMode === 'dark' ? "text-white" : "text-slate-800", "mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-800 md:text-5xl lg:text-6x")}>We build the world’s potential</h1>
					<p className={classNames("mb-8 text-lg font-normal", colorMode === 'dark' ? "text-gray-300" : "text-gray-500", "lg:text-xl sm:px-16 lg:px-48")}>Here at BinaryFarm we focus on markets where technology, innovation, and product can unlock long-term value and drive growth.</p>
					<div className="flex flex-row space-y-4 justify-center sm:space-y-0">
						{/*<a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
							Get started
							<svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
							</svg>
						</a>*/}
						<a href="#" className={
							classNames("inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center border rounded-lg",
								colorMode === 'dark' ? "text-indigo-200 bg-indigo-700 hover:text-white hover:bg-indigo-600 border-gray-700" : "text-indigo-900 hover:text-black bg-slate-200 hover:bg-slate-300 border-gray-300",
								" focus:ring-4 focus:ring-gray-500")
						}>
							Learn more
						</a>
					</div>
				</div>
			</section>
		</>
	)
}

export default Jumbo