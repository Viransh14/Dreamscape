import Link from "next/link";

import { world } from "@/data/world";

export default function WorldPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-6xl font-bold mb-4">
        {world.name}
      </h1>

      <p className="text-gray-400 mb-10">
        {world.description}
      </p>

      <h2 className="text-3xl font-bold mb-4">
        Locations
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        {world.locations.map((location) => (
          <Link
            href={`/location/${location.id}`}
            key={location.id}
            className="bg-zinc-900 p-4 rounded-xl block hover:bg-zinc-800 transition"
          >
            <h3 className="font-bold">
              {location.name}
            </h3>

            <p className="text-gray-400">
              {location.description}
            </p>
          </Link>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-4">
        Characters
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {world.characters.map((character) => (
          <div
            key={character.id}
            className="bg-zinc-900 p-4 rounded-xl"
          >
            <h3 className="font-bold">
              {character.name}
            </h3>

            <p className="text-gray-400">
              {character.occupation}
            </p>
          </div>
        ))}
      </div>

    </main>
  );
}