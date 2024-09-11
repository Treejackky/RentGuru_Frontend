import React from "react";
import Appbar from "../components/Appbar";

export default function About() {
  return (
    <>
      <div className="h-screen w-screen justify-center  text-center">
        <div>
            <h1 className="text-4xl font-bold">About</h1>
          <button
            className=" text-white font-bold py-2 px-4 rounded bg-blue-600 hover:bg-blue-400 "
            onClick={() => alert("Hello")}
          >
            Click me
          </button>
        </div>
      </div>
    </>
  );
}
