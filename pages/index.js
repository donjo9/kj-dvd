import Head from "next/head";
import movies from "./data.json";

export default function Home() {
  const mov = movies.map((m) => {
    if (m.title !== "") {
      return (
        <div className="mx-4 my-1 bg-gray-900 rounded p-2" key={m.id}>
          {m.id}: {m.title}
        </div>
      );
    }
  });
  return (
    <React.Fragment>
      <Head>
        <title>K&J DVD</title>
      </Head>

      <main className="p-4 glid-flow-col grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid items-center justify-center text-gray-300 bg-gray-800">
        {mov}
      </main>
    </React.Fragment>
  );
}
