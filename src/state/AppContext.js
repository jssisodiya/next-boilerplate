import { createContext, useContext, useReducer } from "react";

import { AppAction, appReducer } from "./appReducer";
import { initialState } from "./initialState";

export const AppStateContext = createContext(initialState);
export const AppDispatchContext = createContext(() => null);

export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        {children}
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  );
}

export function useAppStateContext() {
  const state = useContext(AppStateContext);

  return state;
}

export function useAppDispatchContext() {
  return useContext(AppDispatchContext);
}
