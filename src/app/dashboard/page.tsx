import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background-secondary">
      {/* Dashboard Header */}
      <header className="bg-white border-b border-border">
        <div className="mx-auto max-w-screen-xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-title">Dashboard</h1>
          <Link
            href="/"
            className="text-sm text-text-muted hover:text-text-primary transition"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="mx-auto max-w-screen-xl px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="bg-white p-6 rounded-card shadow-card">
            <h3 className="text-text-muted text-sm mb-2">Total Bookings</h3>
            <p className="text-3xl font-bold text-title">24</p>
          </div>

          <div className="bg-white p-6 rounded-card shadow-card">
            <h3 className="text-text-muted text-sm mb-2">Completed Jobs</h3>
            <p className="text-3xl font-bold text-title">18</p>
          </div>

          <div className="bg-white p-6 rounded-card shadow-card">
            <h3 className="text-text-muted text-sm mb-2">Pending</h3>
            <p className="text-3xl font-bold text-title">6</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white p-6 rounded-card shadow-card">
          <h2 className="text-lg font-semibold text-title mb-4">Recent Activity</h2>
          <p className="text-text-muted">No recent activity.</p>
        </div>
      </div>
    </main>
  );
}
