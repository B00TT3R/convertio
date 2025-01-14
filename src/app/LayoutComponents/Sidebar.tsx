"use client";
import { Button } from "../components";
import { useSidebarContext } from "../context/SidebarContext";
import { classNames } from "../utils";

const Sidebar = () => {
  const { isOpen, toggle } = useSidebarContext();
  return (
    <aside
      className={classNames(
        "bg-gray-100 dark:bg-black border-r-green-600 border-r-2 transition-all",
        "text-black dark:text-white overflow-hidden group",
        isOpen ? "w-72" : "w-14",
      )}
      data-open={isOpen || undefined}
    >
      <header className="w-full p-0.5 group-data-[open]:p-2 items-center flex justify-between">
        <h2 className="text-2xl hidden group-data-[open]:inline">Menu</h2>
        <Button
          onClick={toggle}
          className="flex-1 group-data-[open]:flex-initial"
        >
          <span>{isOpen ? "Toggle" : "..."}</span>
        </Button>
      </header>
    </aside>
  );
};
export default Sidebar;
