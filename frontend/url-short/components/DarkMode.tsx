"use client";
import {useTheme} from "next-themes";
import { Button } from "./ui/button";
import {Sun, Moon} from "lucide-react";
const DarkMode = () => {
    const {theme, setTheme} = useTheme();
  return (
    <div>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={ () => setTheme(theme === "dark" ? "light" : "dark")}
          className="theme-switch-button"
          >
            S
          </Button>
    </div>
  )
}

export default DarkMode