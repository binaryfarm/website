'use strict'

import React from "react"

import { useRouteError } from "react-router-dom"
import serverImage from '../images/undraw_server_down_s-4-lk.svg'
import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import { Button, useColorMode } from "@chakra-ui/react"
import { classNames } from "../utils/html"
export default function ErrorPage() {
	const { colorMode } = useColorMode()
	const error: any = useRouteError()

	const goBack = () => {
		history.back();
	}
	return (
		<div className="h-screen flex items-center justify-center">
			<div className={classNames("text-center ps-12", colorMode === 'dark' ? "bg-gray-200" : "bg-slate-200", "p-12 rounded-lg")}>
				<h1 className="mb-4 text-6xl font-semibold text-sky-200 dark:text-sky-800  justify-self-stretch">
					<img src={serverImage} alt="Server Error" className="m-0 p-0 drop-shadow-lg" width='400vw' />
				</h1>
				<p className={classNames("mb-4 text-lg", colorMode === 'dark' ? 'text-gray-800' : 'text-gray-800')}>We seem to be having difficulties...<br />
					{error.data}
				</p>

				<p className="mt-8">
					<Button as='a' onClick={goBack} bgGradient="linear(to-b, teal.300, teal.600)" _hover={{ bgGradient: "linear(to-b, teal.200, teal.500)" }} className="ml-2 rounded-md px-2 py-2 leading-4 text-gray-500 hover:text-gray-800">
						<ArrowLeftIcon title="Back" className="inline-flex w-4 h-4" />
						Back
					</Button>
				</p>

			</div>
		</div>
	);
}