import Nav from '../components/navigation/nav'
import React from 'react'
import Jumbo from '../components/jumbo'
import { Flex, Square } from '@chakra-ui/react'

function App(props: { page: string }) {

	return (
		<>
			<div className='min-h-full full'>
				<Nav currentPage={props.page} />
				<main className='h-full mx-auto max-w-8xl px-4 sm:px-6 lg:px-8'>
					<div>
						<Flex>
							<Square>
								<Jumbo />
							</Square>
						</Flex>

					</div>
				</main>
			</div>

		</>
	)
}

export default App
