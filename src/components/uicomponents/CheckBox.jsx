"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export function CheckboxWithText({ label, description, onChange }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (checked) => {
    setChecked(checked);
    onChange(checked);
  };

  return (
    <div className="flex flex-row gap-2 ">
      <Checkbox id="terms1" checked={checked} onCheckedChange={handleChange} />
      <div className="grid gap-1.5 leading-no2ne mt-0.5">
        <label
          htmlFor="terms1"
          className="text-[12px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
        <p className="text-[12px] text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
