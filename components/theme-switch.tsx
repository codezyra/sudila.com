"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="h-6 w-6">
        <HiOutlineSun className="h-6 w-6" />
      </div>
    );
  }

  if (theme === "dark") {
    return (
      <HiOutlineSun
        onClick={() => setTheme("light")}
        className="h-6 w-6 cursor-pointer"
      />
    );
  }
  if (theme === "light") {
    return (
      <HiOutlineMoon
        onClick={() => setTheme("dark")}
        className="h-6 w-6 cursor-pointer"
      />
    );
  }
}
