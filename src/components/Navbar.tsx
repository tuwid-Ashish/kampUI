"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconArrowDown, IconChevronDown, IconHome, IconMessage, IconUser } from "@tabler/icons-react";
const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-900 dark:text-white" />,
    },
    {
      name: "products",
      link: "/products",
      component:(<IconChevronDown className="m-2 size-5"/> ),
      icon: <IconUser className="h-4 w-4 text-neutral-900 dark:text-white" />,
    },
    {
      name: "Resource",
      link: "/Resource",
      component:(<IconChevronDown className="m-2 size-5"/> ),
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-900 dark:text-white" />
      ),
    },
    {
      name: "Pricing",
      link: "/Pricing",
    },
];
function Navbar() {
  return (
    <div className="relative  w-full ">
    <FloatingNav navItems={navItems} className="mx-16 p-4 rounded-xl shadow-purple-200 shadow-lg" />
  </div>
  )
}

export default Navbar