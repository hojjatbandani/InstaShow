'use client';

import Link from "next/link";
import {useState} from "react";
import {Flex, Section, Container, Button} from "@/components/ui";
import {FormGroup, Input, Label} from "@/components/form";
import {GoogleIcon, AppleIcon, ArrowRightIcon} from "@/components/icons";

export default function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: Implement login logic
		console.log('Login:', {email, password});
	};

	return (
		<Section spacing="none" className="w-full" bgColor="#ffffff">
			<Container size="custom" className="xl:px-6 2xl:px-0">
				<Flex gap="xl" align="center" justify="center" direction="row" className="w-full h-screen py-8">
					<div className="w-full md:w-2/4 lg:w-2/5 p-4 lg:p-8 bg-white rounded-card shadow-card text-left">
						<Flex gap="sm" direction="col" className="mb-8">
							<h1 className="text-colors-primary text-lg sm:text-xl lg:text-2xl font-bold text-title">Log In</h1>
							<p className="text-colors-muted text-md font-normal">Enter your details to sign in</p>
						</Flex>
						<form onSubmit={handleSubmit} className="space-y-4 mb-5">
							<Flex direction="col" gap="md">
								<FormGroup width="full">
									<Label htmlFor="email" textColor="text-colors-muted">
										Email
									</Label>
									<Input
										type="email"
										name="email"
										id="email"
										placeholder="Please enter your email"
									/>
								</FormGroup>

								<FormGroup width="full">
									<Label htmlFor="password" textColor="text-colors-muted">
										Password
									</Label>
									<Input
										type="password"
										name="password"
										id="password"
										placeholder="Please enter your Password"
									/>
								</FormGroup>
							</Flex>

							<div className="text-left text-sm text-colors-muted">
								Forgot your password?
								<Link href="/forgot-password" className="ml-1 text-[#3E50F7] hover:underline">
									click here
								</Link>
							</div>

							<Button
								type="submit"
								variant="primary"
								className="w-full text-md"
							>
								Log In
							</Button>
						</form>
						<Button variant="outline"
										className="w-full text-md border-black/70 flex flex-row gap-2 items-center justify-center mb-5">
							<GoogleIcon className="h-5 w-5 "/>
							Sign in with Google
						</Button>
						<Button variant="outline"
										className="w-full text-md border-black/70 flex flex-row gap-2 items-center justify-center mb-5">
							<AppleIcon className="h-5 w-5 "/>
							Sign in with Apple
						</Button>
						<p className="text-left text-colors-muted">
							{`Don't have an account?`}{' '}
							<Link href="/register" className="ml-1 text-[#3E50F7] hover:underline">
								Open account
							</Link>
						</p>
					</div>
					<div
						className="hidden md:block md:w-2/4 lg:w-3/5 bg-gradient-to-bl
						from-btn-primary-from to-[#00238D] min-h-full h-full overflow-hidden rounded-2xl
							py-8 px-10
						">
						<Flex gap="md" direction="col" align="start" justify="center">
							<Button variant="none"
											size="lg"
											href="/"
											className="text-white bg-white/25 hover:bg-white/10 self-end mb-10">
								back to Home
								<ArrowRightIcon className="ml-2 h-6 w-6" />
							</Button>
							<h2 className="text-white font-semibold text-2xl lg:text-4xl mb-5">Find Trusted Home Service Pros Fast</h2>
							<p className="text-white text-xl font-normal">Book verified professionals in your area for renovation,
								repairs, and home services, all in one place.</p>

						</Flex>
					</div>
				</Flex>
			</Container>

		</Section>

	);
}
