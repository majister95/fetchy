import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function test() {
  return (
    <div>
      <Head>
        <title>FETCHY</title>
        <meta
          name="centraliser vos factures ici"
          content="aggregateur de fature d'achat"
        />
        <link rel="icon" href="/fetchy.png" />
      </Head>

      <div className="py-8">TEST</div>
    </div>
  );
}
