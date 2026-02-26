import type { Metadata } from "next";
import ResetPasswordForm from "./ResetPasswordForm";

export const metadata: Metadata = {
  title: "New Password",
};

export default function NewPasswordPage() {
  return <ResetPasswordForm />;
}
