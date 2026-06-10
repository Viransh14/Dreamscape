"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-32 text-center">

        <h1 className="text-7xl md:text-8xl font-bold mb-6">
          DreamScape
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mb-10">
          Create entire fantasy worlds, characters, quests,
          locations and stories with AI.
        </p>

        <div className="w-full max-w-3xl bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

          <input
            type="text"
            placeholder="Create a cyberpunk city ruled by cats..."
            className="w-full bg-black border border-zinc-700 rounded-xl p-4 mb-4"
          />

          <button
           onClick={() => router.push("/world")}
           className="w-full bg-white text-black font-bold py-4 rounded-xl"
          >
           Generate World
          </button>

        </div>

      </section>

      {/* Examples */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold mb-10">
          Example Worlds
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="font-bold mb-2">
              NeoPurr
            </h3>

            <p className="text-gray-400">
              A cyberpunk empire ruled by intelligent cats.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="font-bold mb-2">
              Skyhaven
            </h3>

            <p className="text-gray-400">
              Floating islands above an endless ocean.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="font-bold mb-2">
              Emberfall
            </h3>

            <p className="text-gray-400">
              A volcanic kingdom powered by dragons.
            </p>
          </div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-6xl mx-auto px-6 pb-32">

        <h2 className="text-4xl font-bold mb-10">
          Features
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-zinc-900 p-6 rounded-2xl">
            🌍 World Generation
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            🏰 Locations
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            👑 Characters
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            ⚔️ Quests
          </div>

        </div>

      </section>

    </main>
  );
}