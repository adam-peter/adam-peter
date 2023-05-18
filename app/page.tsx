"use client";
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div className="mt-16 flex h-1/6 items-center justify-center text-3xl font-light">
        <span className="text-slate-300">{"< "}</span>
        <button onClick={() => setVisible(true)}>&nbsp;who?&nbsp;</button>
        <span className="text-slate-300">{" />"}</span>
      </div>

      <div
        className={
          "mt-10 flex h-2/6 flex-col items-center justify-center gap-[1px] text-3xl font-light " +
          (visible ? "opacity-100" : "opacity-0") +
          " transition-all duration-700"
        }
      >
        <Link
          href={"#"}
          className="mx-auto w-1/4 border border-black p-4 text-center transition-all duration-300 hover:border-slate-300"
        >
          Software developer
        </Link>
        <Link
          href={"#"}
          className="mx-auto w-1/4 border border-black p-4 text-center transition-all duration-300 hover:border-slate-300"
        >
          Reader
        </Link>
        <Link
          href={"#"}
          className="mx-auto w-1/4 border border-black p-4 text-center transition-all duration-300 hover:border-slate-300"
        >
          Dreamer
        </Link>
      </div>

      <footer className="">
        <p className="mt-48 flex items-center justify-center p-6 text-2xl tracking-widest">
          <span className="text-slate-300">{"<"}</span>
          <Link href={"#"}>&nbsp;Contact&nbsp;</Link>
          <span className="text-slate-300">{"/>"}</span>
        </p>
      </footer>
    </div>
  );
};

export default Home;
