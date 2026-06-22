import { useState } from "react";
import { Checkbox } from "@/lib/components/checkbox";

export default function CheckboxDemo() {
  const [checked, setChecked] = useState<boolean>(false);

  return <Checkbox 
    checked={checked}
    onValueChange={setChecked}
  />
}