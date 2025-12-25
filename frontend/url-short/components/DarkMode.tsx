"use client";
import {useTheme} from "next-themes";
import { Button } from "./ui/button";
import {Sun, Moon} from "lucide-react";
const DarkMode = () => {
    const {theme, setTheme} = useTheme();
  return (
    <div>
        <Button 
          variant="outline" 
          size="icon"
          onClick={ () => setTheme(theme === "dark" ? "light" : "dark")}
          className="px-4 py-2 bg-neutral-800 text-neutral-200 dark:bg-neutral-400 dark:text-neutral-800 rounded-2xl cursor-pointer hover:bg-neutral-600"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
    </div>
  )
}

export default DarkMode