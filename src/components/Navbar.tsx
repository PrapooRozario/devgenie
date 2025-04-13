"use client";

import Link from "next/link";
import React, { JSX, useEffect, useState } from "react";
import { geistMono } from "../app/utils/fonts";
import Image from "next/image";
import Logo from "../../public/DEvGENIE.svg";
import { Button } from "./ui/button";
import { motion, useScroll } from "motion/react";
import { useWindowSize } from "react-use";

export default function Navbar(): JSX.Element {
  // Navigation links array
  interface NavLink {
    href: string;
    name: string;
  }
  const links: NavLink[] = [
    { href: "/", name: "HOME" },
    { href: "/fixcode", name: "FIX CODE" },
    { href: "/pricing", name: "PRICING" },
  ];

  const [open, setOpen] = useState<boolean>(false); // State for mobile menu toggle
  const { scrollY } = useScroll(); // Detect scroll position
  const [scrollDown, setScrollingDown] = useState<boolean>(false);

  useEffect(() => {
    return scrollY.onChange((y) => setScrollingDown(y > 20)); // Change state if user scrolls down
  }, [scrollY]);

  const { width } = useWindowSize(); // Get window width

  useEffect(() => {
    if (width >= 1024) {
      setOpen(false); // Close mobile menu if screen width is large
    }
  }, [width]);

  return (
    <div>
      <motion.div
        animate={{
          paddingBottom: width < 295 ? 380 : open ? 320 : 0, // Adjust padding for small screens
          boxShadow: !open && scrollDown ? "0px 3px 20px 1px #171717" : "none", // Add shadow when scrolling down
          border: !open && scrollDown ? "1px solid #171717" : "1px solid transparent", 
        }}
        className={`fixed md:top-6 z-50 top-4 container w-11/12 lg:rounded-2xl rounded-md px-2 flex items-center justify-between shadow-neutral-900`}
      >
        {/* Logo */}
        <Link href="/" className="ml-2">
          <Image
            src={Logo}
            alt="DevGENIE Logo"
            className="w-full lg:max-w-[176px] md:max-w-[160px] sm:max-w-[128px] max-w-[112px]"
            priority={true}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="lg:flex hidden">
          <ul
            className={`flex items-center gap-10 text-white/80 ${geistMono.className} capitalize font-medium text-[16px]`}
          >
            {links?.map((link) => (
              <Link
                key={link?.name}
                href={link?.href}
                className="hover:text-white transition duration-200"
              >
                {link?.name}
              </Link>
            ))}
          </ul>
        </div>

        {/* CTA Buttons for Desktop */}
        <div className="hidden lg:flex items-center gap-2 my-2">
          <Link href="/signup">
            <Button variant={"outline"} className="cursor-pointer py-6">
              SIGN UP
            </Button>
          </Link>
          <Link href="/">
            <Button className="cursor-pointer py-6">TRY FOR FREE</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden my-2 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="#ffff" className="size-6">
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="#ffff" className="size-6">
              <path
                fillRule="evenodd"
                d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ opacity: open ? 1 : 0, y: open ? 0 : -20 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: open ? 0.15 : 0,
          }}
          className={`lg:hidden absolute top-14 left-4`}
        >
          <ul
            className={`flex flex-col gap-6 text-white/80 ${geistMono.className} capitalize font-medium text-[24px]`}
          >
            {links?.map((link) => (
              <Link
                key={link?.name}
                href={link?.href}
                className="hover:text-white transition duration-200"
              >
                {link?.name}
              </Link>
            ))}
          </ul>
          {/* CTA Buttons for Mobile */}
          <div className="flex items-center justify-between gap-2 mt-6">
            <Link href="/">
              <Button className="cursor-pointer py-6">TRY FOR FREE</Button>
            </Link>
            <Link href="/signup">
              <Button variant={"outline"} className="cursor-pointer py-6">
                SIGN UP
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
