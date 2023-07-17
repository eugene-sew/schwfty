import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const getAllCharactersData = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  return res.json();
};
export const metadata = {
  title: "Let's Get Schwftyy | Characters",
  description: "find rick and morty characters",
};
const index = async () => {
  const charactersData = [
    { id: 1, name: "Rick Sanchez", image: "/bg.jpg" },
    { id: 2, name: "Morty Smith", image: "/characters.jpeg" },
    { id: 3, name: "Summer Smith", image: "/location.jpg" },
    // Add more characters here...
  ];

  const { results } = await getAllCharactersData();
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Characters - Schwfty</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <h1 className="text-3xl text-center mb-6">Characters</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.map((character) => (
          <Link
            href={`/cast/${character.id}`}
            key={character.id}>
            <span className="block bg-white rounded shadow p-4 text-center">
              <Image
                src={character.image}
                alt={character.name}
                width={200}
                height={200}
                className="mx-auto h-40 w-40 rounded-full object-cover mb-2"
              />
              <h2 className="text-xl font-medium text-gray-800">
                {character.name}
              </h2>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default index;
