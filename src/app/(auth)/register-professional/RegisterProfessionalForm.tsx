"use client";

import {useState} from "react";
import {Button, Container, Flex, Section} from "@/components/ui";
import {Checkbox, FormGroup, Input, Label, Select, TagInput} from "@/components/form";
import {EyeIcon, EyeOffIcon} from "@/components/icons";
import Link from "next/link";

export default function RegisterProfessionalForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [services, setServices] = useState<string[]>([]);

	const subjectOptions = [
		{value: "company", label: "Company"},
		{value: "company", label: "Company"},
		{value: "company", label: "Company"},
		{value: "company", label: "Company"},
	];

	const experienceOptions = [
		{value: "1", label: "0 - 6 Months"},
		{value: "2", label: "7 - 12 Months"},
		{value: "3", label: "more than 12 Months"},
	]

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: Implement register logic
		console.log("Register:", {name, email, password});
	};

	return (
		<Section spacing="none" className="w-full" bgColor="#ffffff">
			<Container size="custom" className="xl:px-6 2xl:px-0">
				<Flex
					gap="xl"
					align="center"
					justify="center"
					direction="row"
					className="w-full py-14 md:py-16"
				>
					<div className="w-full p-4 lg:p-8 bg-white rounded-card shadow-card text-left">
						<Flex gap="sm" direction="col" className="mb-8">
							<h1 className="text-colors-primary text-lg sm:text-xl lg:text-2xl font-bold text-title">
								Let’s create your account
							</h1>
							<p className="text-colors-muted text-md font-normal">
								Apply in 10 minutes.
							</p>
						</Flex>
						<form onSubmit={handleSubmit} className="space-y-4 mb-5">
							<Flex direction="col" gap="md">
								<Flex
									direction="row"
									align="center"
									justify="start"
									gap="md"
									className="w-full"
								>
									<FormGroup className="w-full">
										<Label htmlFor="first_name" className="text-colors-muted">
											First name
										</Label>
										<Input
											type="text"
											name="first_name"
											id="first_name"
											placeholder="Laura"
										/>
									</FormGroup>
									<FormGroup className="w-full">
										<Label htmlFor="last_name" className="text-colors-muted">
											Last name
										</Label>
										<Input
											type="text"
											name="last_name"
											id="last_name"
											placeholder="Jakson"
										/>
									</FormGroup>
								</Flex>
								<hr className="border-1 border-gray-200 w-full my-5"/>
								<FormGroup width="full">
									<Label htmlFor="phone" textColor="text-colors-muted">
										Phone
									</Label>
									<Input
										type="text"
										name="phone"
										id="phone"
										placeholder="Please enter your phone number"
									/>
								</FormGroup>
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
									<Label htmlFor="city" textColor="text-colors-muted">
										City
									</Label>
									<Input
										type="text"
										name="city"
										id="city"
										placeholder="Please enter your city"
									/>
								</FormGroup>

								<FormGroup width="full">
									<Label htmlFor="service_type" textColor="text-colors-muted">
										Service Type
									</Label>
									<TagInput
										id="service_type"
										name="service_type"
										value={services}
										onChange={setServices}
										placeholder="Type a service and press Enter"
									/>
								</FormGroup>

								<FormGroup width="full">
									<Label htmlFor="password" textColor="text-colors-muted">
										Business Type
									</Label>
									<Select
										name="subject"
										id="subject"
										options={subjectOptions}
									/>
								</FormGroup>
								<FormGroup width="full">
									<Label htmlFor="password" textColor="text-colors-muted">
										Experience
									</Label>
									<Select
										name="subject"
										id="subject"
										options={experienceOptions}
									/>
								</FormGroup>
								<FormGroup width="full">
									<Label htmlFor="password" textColor="text-colors-muted">
										Create Password
									</Label>
									<div className="relative">
										<Input
											type={showPassword ? "text" : "password"}
											name="password"
											id="password"
											placeholder="Please enter your Password"
											className="pr-10"
										/>
										<button
											type="button"
											onClick={() => setShowPassword(!showPassword)}
											className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
										>
											{showPassword ? (
												<EyeOffIcon className="h-5 w-5"/>
											) : (
												<EyeIcon className="h-5 w-5"/>
											)}
										</button>
									</div>
								</FormGroup>
								<FormGroup width="full">
									<Checkbox id="terms_of_privacy" name="terms_of_privacy"
														label="I agree to InstaFix’s Terms of Use and Privacy Policy, and consent to receive electronic communications regarding my account and services."
														textColor="text-colors-muted"/>
								</FormGroup>
							</Flex>

							<Button
								type="submit"
								variant="primary"
								className="w-full md:w-1/2 text-md"
							>
								Register
							</Button>
						</form>
						<div className="text-left text-sm text-colors-muted">
							Already have an account?
							<Link
								href="/login"
								className="ml-1 text-[#3E50F7] hover:underline"
							>
								Login
							</Link>
						</div>
					</div>
				</Flex>
			</Container>
		</Section>
	);
}
