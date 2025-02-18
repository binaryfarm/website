'use strict'

import { chakra, Avatar, FormControl, FormHelperText, Text, Button, FormErrorMessage, Flex, Input, InputLeftElement, Center, Heading, Stack, useColorMode, InputGroup } from '@chakra-ui/react';
import React, { type ChangeEvent, type FormEvent, type FormEventHandler } from 'react';
import { useState } from 'react';
import { classNames } from '../utils/html';
import { LockClosedIcon, UserIcon } from '@heroicons/react/16/solid';


export default function Login() {
	const CFaUserAlt = chakra(UserIcon);
	const CFaLock = chakra(LockClosedIcon);
	const { colorMode } = useColorMode()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

	const submitLogin: FormEventHandler<HTMLDivElement> = (e: FormEvent<HTMLDivElement>) => {
		const data = {
			Email: email,
			Password: password,
		}
		console.log(data);
		e.preventDefault();
	}
	const isError = false
	return (
		<>
			<div className={classNames('min-h-full full', colorMode === 'dark' ? 'bg-slate-800' : 'bg-slate-200')}>
				<Flex className="min-w-full w-full min-h-full full flex flex-col justify-center items-center">
					<Center className='flex-row'>
						<Stack spacing={3} direction={"column"} className={classNames(colorMode === 'dark' ? 'bg-slate-700' : 'bg-white', 'rounded-lg p-10 m-10 place-items-center')}>

							<Avatar bg="teal.500" />
							<Heading>
								Welcome
							</Heading>

							<Text margin={4}>
								Login using your email address and password. <a href="/login/reset" className={classNames("text-sm", colorMode === 'dark' ? 'text-indigo-200 hover:text-indigo-400 hover:underline' : 'text-indigo-800 hover:text-indigo-600 hover:underline')}>Forgot Password</a>
							</Text>
							<FormControl as="form" id='_f' isInvalid={isError} target="_self" onSubmit={submitLogin}>
								<InputGroup marginBottom={3}>
									<InputLeftElement
										pointerEvents="none"
										children={<CFaUserAlt className={classNames(colorMode === 'dark' ? 'text-gray-200' : 'text-gray-600', 'm-0 mt-2 w-6 h-6')} />}
									/>
									<Input id='_e' size="lg" placeholder='Email' type='email' value={email} onChange={handleEmailChange} required isInvalid={email === ''} />
								</InputGroup>
								<InputGroup>
									<InputLeftElement
										pointerEvents="none"
										children={<CFaLock className={classNames(colorMode === 'dark' ? 'text-gray-200' : 'text-gray-600', 'm-0 mt-2 w-6 h-6')} />}
									/>
									<Input id='_p' size="lg" placeholder='Password' type='password' value={password} onChange={handlePasswordChange} required isInvalid={password === ''} />
								</InputGroup>

								{!isError ? (
									<FormHelperText>
										Enter your email address and password.
									</FormHelperText>
								) : (
									<FormErrorMessage>Email and password is required.</FormErrorMessage>
								)}

								<Button
									formTarget='_f'
									borderRadius={0}
									type="submit"
									variant="solid"
									colorScheme="teal"
									width="full"
								>
									Login
								</Button>
							</FormControl>
						</Stack>
					</Center>
				</Flex>
			</div>
		</>
	)
}