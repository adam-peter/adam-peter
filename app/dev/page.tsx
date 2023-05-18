/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { BsGithub } from "react-icons/bs";

const Dev = () => {
  return (
    <div>
      <h2>Software development</h2>
      <p>
        Since my childhood, technology has held a special place in my heart. I
        remember my grandpa teaching me how to type on a keyboard even before I
        learned to write by hand. This early fascination with software,
        applications, and games has become the foundation of my career.
      </p>
      <p>
        For over three years, I have been passionately writing software as both
        a hobbyist and a professional. I have gained valuable experience along
        the way:
      </p>
      <ul>
        <li>Java and Minecraft mod creation</li>
        <li>
          Python and data science/machine learning libraries (Numpy, Pandas,
          Matplotlib, Scikitlearn and SQL)
        </li>
        <li>Frontend technologies: React, Next, Typescript and TailwindCSS</li>
        <li>Rust systems programming and CLI software development</li>
      </ul>
      <p>
        If you're curious about what I'm currently working on, check out my
        Github.
      </p>
      <a href="https://github.com/badmood111" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default Dev;
