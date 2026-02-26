import type { Metadata } from "next";
import OTPForm from "./OTPForm";

export const metadata: Metadata = {
  title: "Verify OTP",
};

export default function OTPPage() {
  return <OTPForm />;
}
