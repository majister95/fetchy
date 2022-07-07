import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8 mx-auto">
      <Head>
        <title>FETCHY</title>
        <meta
          name="centraliser vos factures ici"
          content="aggregateur de fature d'achat"
        />
        <link rel="icon" href="/fetchy.png" />
      </Head>

      <div className="py-8">
        <h1 className="text-center text-8xl">
          Welcome to <span className="font-semibold text-red-500">FETCHY</span>
        </h1>
      </div>

      <div className="py-8">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <Link href="/factures/sfr">
            <Image src="/sfr.svg" alt="Vercel Logo" width={400} height={400} />
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Factures SFR
            </h5>

            <p className="py-4">
              <Link href="#">
                <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                  Mettre à jour
                  <svg
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                  </svg>
                </div>
              </Link>
            </p>

            <Link href="/factures/sfr">
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Télécharger
                <svg
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <footer>
        <span>
          <Image src="/fetchy.png" alt="Vercel Logo" width={72} height={72} />
        </span>
      </footer>
    </div>
  );
}
