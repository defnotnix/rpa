"use client";

import {
  createContext,
  useContext as uC,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";
import { AdminShellBreadcrumb, PropAdminShellContext } from "./AdminShell.type";

// -----------------
// 1. Type Setup
// -----------------
type Action =
  | { type: "setBreadcrumbs"; payload: AdminShellBreadcrumb[] }
  | { type: "setModuleInfo"; payload: string }
  | { type: "setModuleDescription"; payload: string }
  | { type: "init"; payload: PropAdminShellContext };

type AdminShellState = PropAdminShellContext;

interface AdminShellContextType {
  state: AdminShellState;
  dispatch: Dispatch<Action>;
}

// -----------------
// 2. Initial State
// -----------------
const initialShellState: AdminShellState = {
  breadcrumbs: [],
  moduleName: "",
  moduleDescription: "",
};

// -----------------
// 3. Reducer
// -----------------
const reducer = (state: AdminShellState, action: Action): AdminShellState => {
  switch (action.type) {
    case "setBreadcrumbs":
      return { ...state, breadcrumbs: action.payload };
    case "setModuleInfo":
      return { ...state, moduleName: action.payload };
    case "setModuleDescription":
      return { ...state, moduleDescription: action.payload };
    case "init":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// -----------------
// 4. Context
// -----------------
const Context = createContext<AdminShellContextType | undefined>(undefined);
const useContext = () => {
  const context = uC(Context);
  if (!context)
    throw new Error("useAdminShellContext must be used within a Provider");
  return context;
};

// -----------------
// 5. Provider
// -----------------
function AdminShellProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialShellState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export {
  Context as AdminShellContext,
  useContext as useAdminShellContext,
  AdminShellProvider,
};
