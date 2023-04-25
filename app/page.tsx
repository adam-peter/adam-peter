import Link from "next/link";

const Home = () => {
  return (
    <main className="h-full border border-white">
      <h1 className="flex items-center justify-center p-6 text-6xl font-extralight tracking-widest">
        Adam Peter
      </h1>

      <div className="flex h-2/6 items-center justify-center text-3xl font-light">
        who?
      </div>

      <div className="flex h-2/6 flex-col items-center justify-center text-3xl font-light">
        <Link href="#" className="relative">
          <span className="text-white invisible group-hover:visible">{">"}</span>
          Software developer
          <span className="text-white invisible group-hover:visible">{"<"}</span>
        </Link>

        <Link href={""} className="">
          Reader
        </Link>
        <Link href={""} className="">
          Dreamer
        </Link>
      </div>

      <footer className="">
        <p className="flex items-center justify-center p-6 text-2xl tracking-widest">
          <Link href={"#"}>Contact</Link>
        </p>
      </footer>
    </main>
  );
};

export default Home;
