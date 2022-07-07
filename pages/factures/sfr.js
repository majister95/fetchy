import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Facture() {
  return (
    <div className="p-8">
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
          {" "}
          Welcome to{" "}
          <Link href="/">
            <span className="font-semibold text-red-500">FETCHY</span>
          </Link>
        </h1>
      </div>

      <div className="flex flex-row gap-4">
        <div>
          <Link href="/factures/sfr">
            <Image src="/sfr.svg" alt="Vercel Logo" width={120} height={120} />
          </Link>
        </div>
        <div className="flex flex-row items-center w-full gap-8 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-red-700 dark:border-red-600">
          <p className="px-2 pt-2 text-center text-white text-8xl ">SFR</p>
          <div className="flex flex-col w-1/2 mx-8 text-lg text-white ">
            <div className="flex flex-row items-center gap-4 ">
              <Image
                src="/identity.svg"
                alt="identity Logo"
                width={40}
                height={40}
              />
              <p className="text-lg font-semibold">Monentreprise@compta.fr</p>
            </div>
            <div className="flex flex-row items-center gap-4 ">
              <Image src="/lock.svg" alt="lock Logo" width={40} height={40} />
              <p className="text-lg font-semibold">**********</p>
            </div>
          </div>
          <p className="px-2 pt-2 text-2xl text-center text-white">
            Last updated 22/06/2022
          </p>
          <Image
            src="/refresh.svg"
            alt="refresh Logo"
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="p-4">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Recherche une facture"
            ></input>
          </div>
        </div>

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  ></input>
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Référence
              </th>
              <th scope="col" className="px-6 py-3">
                Montant TTC
              </th>
              <th scope="col" className="px-6 py-3">
                Montant HT
              </th>
              <th scope="col" className="px-6 py-3">
                TVA
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Télécharger</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  ></input>
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                01/01/2022
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                F-SFR-220100258
              </th>
              <td className="px-6 py-4">120 €</td>
              <td className="px-6 py-4">100 €</td>
              <td className="px-6 py-4">20 €</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Télécharger
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-2"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  ></input>
                  <label htmlFor="checkbox-table-search-2" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                01/01/2022
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                F-SFR-220100258
              </th>
              <td className="px-6 py-4">120 €</td>
              <td className="px-6 py-4">100 €</td>
              <td className="px-6 py-4">20 €</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Télécharger
                </a>
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  ></input>
                  <label htmlFor="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                01/01/2022
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                F-SFR-220100258
              </th>
              <td className="px-6 py-4">120 €</td>
              <td className="px-6 py-4">100 €</td>
              <td className="px-6 py-4">20 €</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Télécharger
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
