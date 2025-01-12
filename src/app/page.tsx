"use client";
import { Button } from "./components";
import { useSidebarContext } from "./context/SidebarContext";

export default function Home() {
  const sideBar = useSidebarContext();
  console.log(sideBar.isOpen);
  return (
    <div className="text-white flex flex-col justify-start items-start">
      <Button onClick={sideBar.toggleSidebar}>Alternar</Button>
      {sideBar.isOpen ? "aberto" : "fechado"}
    </div>
  );
}
