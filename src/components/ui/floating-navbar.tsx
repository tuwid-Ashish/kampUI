"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { IconMenu2 } from "@tabler/icons-react";
import { Menu, MenuItem } from "./navbar-menu";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name?: string;
    linkclasses?: string;
    link: string;
    component?: JSX.Element;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState<string | null>(null)
  const [Drower, setDrawer] = useState(false)
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center",
          className
        )}
      >

        <h2 className="text-4xl font-bold px-4 font-mono hidden sm:block"><span className="text-purple-500">N</span>AV<span className="text-purple-500">B</span>AR</h2>
        <h2 className="text-4xl font-bold px-4 font-mono block sm:hidden"><span className="text-purple-500">N</span>AV</h2>     
        <div className="flex items-center justify-center space-x-6 flex-grow">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 ", navItem.linkclasses
              )}
            >
               
              {/* <span className="block sm:hidden">{navItem.icon}</span> */}
              <span className={`hidden sm:flex text-lg font-bold items-center ${navItem.linkclasses}`}>{navItem.component ? (
                <>
                  {navItem.name}
                  {navItem.component}
                </>
              ) : (
                navItem.name
              )}</span>
              
            </Link>
          ))}
        </div>
        <Menu setActive={setActive} >
        <MenuItem setActive={setActive} active={active} item="Home" trigeritem={ <IconMenu2 className="text-whit sm:hidden flex-grow " onClick={()=>setDrawer(!Drower)}/>}>
        <div className="flex items-center justify-center flex-col space-y-6 ">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 ", navItem.linkclasses
              )}
            >
               
              {/* <span className="block sm:hidden">{navItem.icon}</span> */}
              <span className={`flex text-sm font-bold items-center ${navItem.linkclasses}`}> 
                {navItem.name
              }</span>
              
            </Link>
          ))}
        </div>
        <div className="m-4 gap-4 flex">
          <Link  href={"/login"}>
          <button className="border text-sm font-normal relative border-neutral-200 bg-purple-100 hover:bg-purple-200 dark:border-white/[0.2] text-purple-600 dark:text-white p-2 rounded-lg">
            <span>Login in</span>
          </button>
          </Link>
          <Link href={"/SIGNUP"}>
          <button className="border text-sm font-medium relative bg-purple-500 hover:bg-purple-800 border-neutral-200 dark:border-white/[0.2] text-white dark:text-white p-2 rounded-lg">
            <span>Sign up</span>
          </button>
          </Link>
          </div>
        </MenuItem>
          </Menu>  
        <div className="mx-4  gap-4 hidden sm:flex">
          <button className="border text-sm font-medium relative border-neutral-200 bg-purple-100 hover:bg-purple-200 dark:border-white/[0.2] text-purple-600 dark:text-white px-4 py-2 rounded-lg">
            <span>Login in</span>
          </button>
          <button className="border text-sm font-medium relative bg-purple-500 hover:bg-purple-800 border-neutral-200 dark:border-white/[0.2] text-white dark:text-white px-4 py-2 rounded-lg">
            <span>Sign up</span>
          </button>
          </div>
    

      </motion.div>
    </AnimatePresence>
  );
};
