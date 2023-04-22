"use client";
import React from "react";
import Link from "next/link";
import ToggleSwitch from "./switch";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  const header = {
    tabs: [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "Latest News",
        link: "/latest-news",
      },
      {
        title: "Reviews",
        link: "/reviews",
      },
    ],
    contact: {
      title: "Contact Us",
      link: "/",
    },
  };
  return (
    <header className="flex flex-row max-w-7xl py-6 w-full mx-auto justify-between text-black">
      <div className="flex flex-row items-center space-x-16">
        <span className="cursor-pointer hover:text-primary transition-all ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75H20.25M3.75 12H15.4358M3.75 17.25H20.25"
            />
          </svg>
        </span>
        <nav className="flex">
          <ul className="flex flex-row space-x-10">
            {header &&
              header.tabs.map((tab, index) => (
                <Link href={tab?.link} key={index}>
                  <li
                    className={`hover:text-primary transition ${
                      tab.link === path ? "text-primary" : "text-gray-700"
                    }`}
                  >
                    {tab?.title}
                  </li>
                </Link>
              ))}
          </ul>
        </nav>
      </div>

      <div className="flex flex-row space-x-10 ">
        <Link href={header?.contact?.link}>{header?.contact?.title}</Link>
        <ToggleSwitch />
      </div>
    </header>
  );
}
