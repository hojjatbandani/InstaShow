import type { Metadata } from "next";
import RegisterProfessionalForm from "@/app/(auth)/register-professional/RegisterProfessionalForm";

export const metaData: Metadata = {
	title: "Professional Register",
}

export default function ProfessionalRegisterPage() {
	return (
		<RegisterProfessionalForm />
	)
}