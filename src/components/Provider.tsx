import React, { useEffect } from "react";
import { PaperProvider } from "react-native-paper";
import { createTable as createGlassTable } from "../utils/sqlite/glass_count";
import { createTable as createWeightTable } from "../utils/sqlite/weight";

interface Props {
  children: React.ReactNode;
}

export default function Provider({ children }: Props) {
  useEffect(() => {
    createGlassTable();
    createWeightTable();
  }, []);
  return <PaperProvider>{children}</PaperProvider>;
}
