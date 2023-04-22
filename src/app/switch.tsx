"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function ToggleSwitch() {
  const [enabled, setEnabled] = useState(true);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-black" : "bg-white"
      } relative inline-flex h-5 w-10 items-center rounded-full`}
    >
      <span className="sr-only">Switch theme</span>
      <span
        className={`${
          enabled ? "translate-x-[22px] bg-white" : "translate-x-[2px] bg-black"
        } inline-block h-4 w-4 transform rounded-full transition`}
      />
    </Switch>
  );
}
