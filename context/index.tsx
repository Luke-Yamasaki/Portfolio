'use client';
//React
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';

type VisitedContextType = {
  visited: boolean;
  setVisited: Dispatch<SetStateAction<boolean>>;
};

export const visitedContext = createContext<VisitedContextType>({
  visited: false,
  setVisited: () => {},
});

export const useVisited = () => useContext(visitedContext);

type VisitedProviderProps = {
  children: ReactNode;
};

export default function VisitedProvider(props: VisitedProviderProps) {
  const [visited, setVisited] = useState<boolean>(false);

  useEffect(() => {
    sessionStorage.getItem('visited') === 'true'
      ? setVisited(true)
      : setVisited(false);
  }, []);

  return (
    <visitedContext.Provider value={{ visited, setVisited }}>
      {props.children}
    </visitedContext.Provider>
  );
}

