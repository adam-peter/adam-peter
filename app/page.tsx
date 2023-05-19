"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    //the state of section visibility
    setVisible(Cookies.get("visibleState") === "true");
  }, []);

  const handleToggleVisibility = () => {
    Cookies.set("visibleState", String(!visible));
    setTransition(true);
    setVisible(!visible);
  };

  return (
    <main className="flex h-5/6 flex-col justify-between">
      {/* Who section */}
      <section>
        <div className="flex h-1/6 items-center justify-center text-3xl font-light">
          <span className="text-slate-500">{"< "}</span>
          <button onClick={handleToggleVisibility}>&nbsp;who?&nbsp;</button>
          <span className="text-slate-500">{" />"}</span>
        </div>

        <div
          className={
            "mt-20 flex h-2/6 flex-col items-center justify-center gap-[1px] text-3xl font-light " +
            (visible ? "opacity-100" : "opacity-0") +
            (transition ? " transition-all duration-700" : "")
          }
        >
          <Link
            href="/dev"
            className="mx-auto w-1/4 border border-black p-4 text-center transition-all duration-300 hover:border-slate-500 active:bg-slate-800"
          >
            Software developer
          </Link>
          <Link
            href="/books"
            className="mx-auto w-1/4 border border-black p-4 text-center transition-all duration-300 hover:border-slate-500 active:bg-slate-800"
          >
            Reader
          </Link>
          <Link
            href="dreams"
            className="mx-auto w-1/4 border border-black p-4 text-center transition-all duration-300 hover:border-slate-500 active:bg-slate-800"
          >
            Dreamer
          </Link>
        </div>
      </section>

      {/* Contact footer */}
      <p className="flex items-center justify-center p-6 text-2xl tracking-widest">
        <span className="text-slate-500">{"<"}</span>
        <Link href={"/contact"}>&nbsp;Contact&nbsp;</Link>
        <span className="text-slate-500">{"/>"}</span>
      </p>
    </main>
  );
};

export default Home;
