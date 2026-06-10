import { world } from "@/data/world";

export default async function LocationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const location = world.locations.find(
    (l) => l.id === Number(id)
  );

  if (!location) {
    return <div>Location not found</div>;
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-6xl font-bold mb-4">
        {location.name}
      </h1>

      <p className="text-xl text-gray-400 mb-6">
        {location.description}
      </p>

      <div className="bg-zinc-900 p-6 rounded-2xl">
        <h2 className="text-2xl font-bold mb-3">
          History
        </h2>

        <p>
          {location.history}
        </p>
      </div>
    </main>
  );
}