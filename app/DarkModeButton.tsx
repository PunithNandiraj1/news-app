'use client'

import { useEffect, useState } from "react"
import {useTheme} from "next-themes";
import { SunIcon , MoonIcon } from "@heroicons/react/24/solid";


function DarkModeButton() {

    const [mounted , setMounted] = useState(false);
    const {systemTheme , theme , setTheme } = useTheme();

    useEffect(()=>{
        setMounted(true)
    },[]);

    if(!mounted) {
        return null;
    }

    const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>DarkModeButton</div>
  )
}

export default DarkModeButton