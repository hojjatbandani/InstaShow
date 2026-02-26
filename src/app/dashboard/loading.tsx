export default function DashboardLoading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-[#3E50F7] border-t-transparent animate-spin" />
        <p className="text-sm text-gray-400 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
