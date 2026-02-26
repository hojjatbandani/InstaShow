'use client';

import Link from "next/link";
import {useState} from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import {Button, Container, Flex, Section} from "@/components/ui";
import {FormGroup, Input, Label} from "@/components/form";
import {ArrowRightIcon, EyeIcon, EyeOffIcon} from "@/components/icons";

export default function ResetPasswordForm() {
	const [email, setEmail] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [showRePassword, setShowRePassword] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: Implement forgot password logic
		console.log('Forgot password:', email);
		setSubmitted(true);
	};

	return (
		<Section spacing="none" className="w-full" bgColor="#ffffff">
			<Container size="custom" className="xl:px-6 2xl:px-0">
				<Flex gap="xl" align="center" justify="center" direction="row" className="w-full h-screen py-8">
					<div className="w-full md:w-2/4 lg:w-2/5 p-4 lg:p-8 bg-white rounded-card shadow-card text-left">
						<Flex gap="sm" direction="col" className="mb-8">
							<h1 className="text-colors-primary text-lg sm:text-xl lg:text-2xl font-bold text-title">Reset
								password
							</h1>
							<p className="text-colors-muted text-md font-normal">Create a new password for your InstaFix account. Make
								sure it’s secure and easy to remember.</p>
						</Flex>
						<form onSubmit={handleSubmit} className="space-y-4 mb-5">
							<Flex direction="col" gap="md">
								<FormGroup width="full">
									<Label htmlFor="password" textColor="text-colors-muted">
										Password
									</Label>
									<div className="relative">
										<Input
											type={showPassword ? "text" : "password"}
											name="password"
											id="password"
											placeholder="Please enter your new Password"
											className="pr-10"
										/>
										<button
											type="button"
											onClick={() => setShowPassword(!showPassword)}
											className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
										>
											{showPassword ? <EyeOffIcon className="h-5 w-5"/> : <EyeIcon className="h-5 w-5"/>}
										</button>
									</div>
								</FormGroup>
								<FormGroup width="full">
									<Label htmlFor="re_password" textColor="text-colors-muted">
										Password
									</Label>
									<div className="relative">
										<Input
											type={showRePassword ? "text" : "password"}
											name="re_password"
											id="re_password"
											placeholder="Please retype your new Password"
											className="pr-10"
										/>
										<button
											type="button"
											onClick={() => setShowRePassword(!showRePassword)}
											className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
										>
											{showRePassword ? <EyeOffIcon className="h-5 w-5"/> : <EyeIcon className="h-5 w-5"/>}
										</button>
									</div>
								</FormGroup>
							</Flex>
							<Button
								type="submit"
								variant="primary"
								className="w-full text-md"
							>
								Reset password
							</Button>
						</form>

						<p className="text-left text-colors-muted">
							{`Return to`}
							<Link href="/login" className="ml-1 text-[#3E50F7] hover:underline">
								Login
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
								<ArrowRightIcon className="ml-2 h-6 w-6"/>
							</Button>
							<h2 className="text-white font-semibold text-2xl lg:text-4xl mb-5">Home Services, Made Simple.</h2>
							<p className="text-white text-xl font-normal">Request quotes, chat with pros, and manage bookings — all
								from one dashboard.</p>

						</Flex>
					</div>
				</Flex>
			</Container>

		</Section>
	);
}
