import Head from "next/head";

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export const metadata = {
  title: "Let's Get Schwftyy",
  description: "find rick and morty characters",
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className={styles.home}>
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={styles.title}>
              Welcome to the Rick and Morty Universe
            </h1>
            <p className={styles.description}>
              Explore the multiverse with Rick and Morty
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20">
              <Link
                href="/cast"
                className="rounded-xl shadow text-gray-800 bg-white h-32 px-3 py-2 flex items-center gap-5 hover:bg-slate-200 transition duration-300 ease-in-out">
                <Image
                  src={"/characters.jpeg"}
                  alt="_image"
                  width={100}
                  height={100}
                  className="rounded-xl h-full object-cover border-2 border-green-500"
                />
                <span className={""}>
                  <h2>Characters &rarr;</h2>
                  <p>Discover the colorful characters from the show</p>
                </span>
              </Link>

              <Link
                href="/episodes"
                className="rounded-xl shadow text-gray-800 bg-white h-32 px-3 py-2 flex items-center gap-5 hover:bg-slate-200 transition duration-300 ease-in-out">
                <Image
                  src={"/episodes.jpg"}
                  alt="_image"
                  width={100}
                  height={100}
                  className="rounded-xl h-full object-cover border-2 border-green-500"
                />
                <span className={""}>
                  <h2>Episodes &rarr;</h2>
                  <p>Check out the mind-bending episodes</p>
                </span>
              </Link>

              <Link
                href="/locations"
                className="rounded-xl shadow text-gray-800 bg-white h-32 px-3 py-2 flex items-center gap-5 hover:bg-slate-200 transition duration-300 ease-in-out">
                <Image
                  src={"/location.jpg"}
                  alt="_image"
                  width={100}
                  height={100}
                  className="rounded-xl h-full object-cover border-2 border-green-500"
                />
                <span className={""}>
                  <h2>Locations &rarr;</h2>
                  <p>Explore the strange and unique locations</p>
                </span>
              </Link>
            </div>
          </main>

          <footer className={styles.footer}>
            <span
              href="https://github.com/eugene-sew"
              target="_blank"
              rel="noopener noreferrer">
              Powered by Next.js
            </span>
          </footer>
        </div>
      </div>
    </main>
  );
}
