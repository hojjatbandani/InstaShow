'use client';

import Link from "next/link";
import {useState, useRef} from "react";
import Image from "next/image";
import {Flex, Section, Container, Button} from "@/components/ui";
import {ArrowRightIcon} from "@/components/icons";
import OTPEmail from "@/assets/auth/OTP Email.png"

export default function OTPForm() {
	const [otp, setOtp] = useState(['', '', '', '', '', '']);
	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

	const handleChange = (index: number, value: string) => {
		if (value.length > 1) return;

		const newOtp = [...otp];
		newOtp[index] = value;
		setOtp(newOtp);

		// Auto-focus next input
		if (value && index < 5) {
			inputRefs.current[index + 1]?.focus();
		}
	};

	const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
		// Move to previous input on backspace
		if (e.key === 'Backspace' && !otp[index] && index > 0) {
			inputRefs.current[index - 1]?.focus();
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const code = otp.join('');
		// TODO: Implement OTP verification
		console.log('OTP:', code);
	};

	const handleResend = () => {
		// TODO: Implement resend OTP
		console.log('Resend OTP');
	};

	return (
		<Section spacing="none" className="w-full" bgColor="#ffffff">
			<Container size="custom" className="xl:px-6 2xl:px-0">
				<Flex gap="xl" align="center" justify="center" direction="row" className="w-full h-screen py-8">
					<div className="w-full md:w-2/4 lg:w-2/5 p-4 lg:p-8 bg-white rounded-card shadow-card text-left">
						<Flex gap="sm" direction="col" className="mb-8">
							<Image src={OTPEmail} alt="OTP verification" className="max-w-full h-auto object-contain mb-2"/>
							<h1 className="text-colors-primary text-lg sm:text-xl lg:text-2xl font-bold text-title">Confirm your
								email</h1>
							<p className="text-colors-muted text-md font-normal mb-4">We’ve sent a verification code to
								alesiakarapova@mail.com. Please enter the code below to complete your InstaFix account setup.</p>
						</Flex>
						<form onSubmit={handleSubmit} className="space-y-10">
							<Flex gap="sm" direction="row" align="center" justify="between" className="mb-5">
								{otp.map((digit, index) => (
									<input
										key={index}
										ref={(el) => {
											inputRefs.current[index] = el;
										}}
										type="text"
										inputMode="numeric"
										maxLength={1}
										value={digit}
										onChange={(e) => handleChange(index, e.target.value)}
										onKeyDown={(e) => handleKeyDown(index, e)}
										className="w-12 h-12 text-center text-xl font-semibold rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
									/>
								))}
							</Flex>

							<div className="my-10">
								<Link href="/" className="text-[#3E50F7] font-semibold">Send it to my Mobile</Link>
							</div>

							<Button
								type="submit"
								variant="primary"
								className="w-full text-md"
							>
								Confirm
							</Button>
						</form>
						<p className="mt-7 text-colors-muted">
							{`Didn't receive a code?`}{' '}
							<button onClick={handleResend} className="text-[#3E50F7] hover:underline">
								Send a new code
							</button>
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
							<h2 className="text-white font-semibold text-2xl lg:text-4xl mb-5">From Small Fixes to Full Renovations.</h2>
							<p className="text-white text-xl font-normal">Connect with licensed and insured professionals across Alberta, when you need them.</p>
						</Flex>
					</div>
				</Flex>
			</Container>
		</Section>
	);
}
