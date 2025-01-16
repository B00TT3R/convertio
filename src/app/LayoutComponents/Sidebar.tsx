"use client";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { Button } from "../components";
import { useSidebar } from "../context/useSidebar";

import { classNames } from "../utils";
import { useState } from "react";
import { MdAutoMode, MdDarkMode, MdLightMode } from "react-icons/md";

const plans = [
  { icon: <MdLightMode className="size-8" />, value: "light" },
  { icon: <MdAutoMode className="size-8" />, value: "system" },
  { icon: <MdDarkMode className="size-8" />, value: "dark" },
];
const Sidebar = () => {
  const { isOpen, toggle } = useSidebar();
  const [selected, setSelected] = useState(plans[0]);
  return (
    <aside
      className={classNames(
        "bg-gray-100 dark:bg-black border-r-green-600 border-r-2 transition-all",
        "text-black dark:text-white overflow-hidden group flex flex-col",
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
      <footer
        className={classNames(
          "mt-auto py-4",
          "[--textColor:black] dark:[--textColor:white]",
        )}
      >
        <RadioGroup
          value={selected}
          onChange={setSelected}
          aria-label="Server size"
          className="flex justify-around"
        >
          {plans.map((plan) => (
            <Field
              key={plan.value}
              className={classNames(
                "flex flex-col-reverse justify-center items-center gap-1 relative",
                "after:w-8 after:h-0.5 after:absolute",
                "after:[--textColor]",
                "after:left-full after:top-1/4 last:after:hidden",

                "before:w-8 before:h-0.5 before:absolute",
                "before:[--textColor]",
                "before:right-full before:top-1/4 first:before:hidden",
              )}
            >
              <Radio
                value={plan}
                className={classNames(
                  "group peer flex size-5 items-center justify-center rounded-full border",
                  "dark:bg-white bg-gray-500",
                  "data-[checked]:bg-green-600",
                )}
              ></Radio>
              <Label className="text-gray-500 peer-data-[checked]:text-[--textColor]">
                {plan.icon}
              </Label>
            </Field>
          ))}
        </RadioGroup>
      </footer>
    </aside>
  );
};
export default Sidebar;
