import Link from "next/link";

export default function DashboardFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} InstaFix. All rights reserved.
          </p>
          <nav className="flex items-center gap-6">
            <Link
              href="/help"
              className="text-sm text-gray-500 hover:text-gray-700 transition"
            >
              Help
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-gray-700 transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-gray-700 transition"
            >
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
