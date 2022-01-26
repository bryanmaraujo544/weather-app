import { createContext, ReactNode, useState } from "react";

interface ContextProps {
  otherWeatherData: any,
  setOtherWeatherData: any
}
export const OtherWeatherDataContext = createContext({} as ContextProps);

export const OtherWeatherDataProvider = ({ children }: { children: ReactNode }) => {
  const [otherWeatherData, setOtherWeatherData] = useState({} as any);

  return (
    <OtherWeatherDataContext.Provider value={{ otherWeatherData, setOtherWeatherData }}>
      {children}
    </OtherWeatherDataContext.Provider>
  )
}