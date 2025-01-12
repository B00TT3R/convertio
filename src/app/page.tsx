"use client";
import { Button } from "./components";
import { useSidebarContext } from "./context/SidebarContext";

export default function Home() {
  const sideBar = useSidebarContext();
  console.log(sideBar.isOpen);
  return (
    <div className="text-white flex flex-col justify-end flex-1 items-end">
      <Button onClick={sideBar.toggle}>Alternar</Button>
      {sideBar.isOpen ? "aberto" : "fechado"}
    </div>
  );
}
