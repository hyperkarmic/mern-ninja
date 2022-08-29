import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

export const workoutsReducer = () => {};

const WorkoutsContextProvider = ({ children }) => {
  const [state, despatch] = useReducer(workoutsReducer, {
    workouts: null,
  });
  return (
    <WorkoutsContext.Provider value={{ workouts: [] }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
