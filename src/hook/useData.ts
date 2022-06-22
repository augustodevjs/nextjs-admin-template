import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export function useData() {
  const context = useContext(AppContext);
  return context;
}
