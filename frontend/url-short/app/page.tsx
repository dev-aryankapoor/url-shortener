"use client";
import Link from "next/link";
import DarkMode from "@/components/DarkMode";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-8xl m-1">URL Shortener</h1>
      <p className="text-2xl m-1">your go to url shortener with tons of awesome features</p>
    </div>
  );
}
