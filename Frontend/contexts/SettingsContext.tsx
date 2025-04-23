import React, { createContext, useState, useContext } from "react";

type SettingsContextType = {
  temperatureUnit: string;
  distanceUnit: string;
  setTemperatureUnit: (unit: string) => void;
  setDistanceUnit: (unit: string) => void;
};

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [temperatureUnit, setTemperatureUnit] = useState("°C");
  const [distanceUnit, setDistanceUnit] = useState("m");

  return (
    <SettingsContext.Provider
      value={{
        temperatureUnit,
        distanceUnit,
        setTemperatureUnit,
        setDistanceUnit,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
