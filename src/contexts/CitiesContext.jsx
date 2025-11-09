import { createContext, useState, useEffect, useContext } from "react";

const CitiesContext = createContext();
const _BASE_URL = "http://localhost:3000/cities";
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${_BASE_URL}`);
        if (!res.ok) throw new Error("Network is not Ok");
        const data = await res.json();
        setCities(data);
      } catch {
        alert("there is an error loading the data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("citiesContext is used outside of the provider");
  return context;
}

export { CitiesProvider, useCities };
