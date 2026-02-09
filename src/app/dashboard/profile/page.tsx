export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-background-secondary">
      <div className="mx-auto max-w-screen-xl px-6 py-8">
        <h1 className="text-2xl font-bold text-title mb-8">Profile</h1>

        <div className="bg-white p-6 rounded-card shadow-card">
          <h2 className="text-lg font-semibold text-title mb-4">Your Profile</h2>
          <p className="text-text-muted">Manage your profile information here.</p>
        </div>
      </div>
    </main>
  );
}
