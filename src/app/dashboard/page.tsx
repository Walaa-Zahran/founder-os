export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">FounderOS Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-900 p-4 rounded-xl">
          <h2 className="font-semibold mb-2">Command</h2>
          <textarea
            className="w-full p-2 bg-gray-800 rounded"
            placeholder="Type your command..."
          />
          <button className="mt-2 bg-blue-600 px-4 py-2 rounded">Run</button>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl">
          <h2 className="font-semibold mb-2">Activity</h2>
          <p className="text-gray-400">No activity yet...</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl">
          <h2 className="font-semibold mb-2">Preview</h2>
          <p className="text-gray-400">Nothing generated yet...</p>
        </div>
      </div>
    </main>
  );
}
