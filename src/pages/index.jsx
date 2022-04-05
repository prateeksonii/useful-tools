import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Head>
      <title>Breeze</title>
    </Head>
    <main className="w-2/3 mx-auto py-12">
      <h1 className="text-center text-5xl font-bold font-head">
        All the useful tools at one place
      </h1>

      <section className="grid grid-cols-3 mt-12">
        <Link href="/bin-to-dec">
          <a className="card hover:bg-primary transition-all duration-200">
            Binary to Decimal
          </a>
        </Link>
      </section>
    </main>
    </>
  );
}
