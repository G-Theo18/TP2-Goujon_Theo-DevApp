import { TextField } from "@/lib/components/text-field";
import { useState } from "react";

export function TextFieldDemo() {
  const [value, setValue] = useState<string>('');

  return <>
    <TextField 
      value={value}
      onChangeText={setValue}
      placeholder="Champ..."
    />

    <TextField 
      value={value}
      onChangeText={setValue}
      placeholder="Champ avec erreur..."
      errors={["Mon erreur"]}
    />
  </>
}