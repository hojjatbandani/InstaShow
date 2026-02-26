import Header from "@/components/Authentication/Header";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-white">
        {children}
      </main>
    </>

  );
}
