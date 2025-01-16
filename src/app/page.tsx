"use client";
import { Button } from "./components";
import { useSidebar } from "./context/useSidebar";
import { useTheme } from "./context/useTheme";

export default function Home() {
  const sideBar = useSidebar();
  console.log(sideBar.isOpen);
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <div className="bg-gray-200 dark:bg-slate-950 dark:text-white flex flex-col flex-1 items-end size-full">
      <Button onClick={sideBar.toggle}>Alternar</Button>
      {sideBar.isOpen ? "aberto" : "fechado"}
      <span className="dark:text-white">{String(theme)}</span>
      <Button onClick={() => setTheme("light")}>Light</Button>
      <Button onClick={() => setTheme("dark")}>Dark</Button>
      <Button onClick={() => setTheme("system")}>System</Button>
    </div>
  );
}
