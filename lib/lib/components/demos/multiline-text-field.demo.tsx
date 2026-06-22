import { MultilineTextField } from "@/lib/components/multiline-text-field";
import { useState } from "react";

export function MultilineTextFieldDemo() {
  const [value, setValue] = useState<string>('');

  return <MultilineTextField 
    value={value}
    onChangeText={setValue}
    placeholder="Multiligne..."
  />
}