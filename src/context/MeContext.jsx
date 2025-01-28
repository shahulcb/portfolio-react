import { createContext, useContext, useEffect, useState } from "react";
import { GET_ME } from "../services/queries";
import client from "../services/datoCMS";

const MeContext = createContext();

export const MeProvider = ({ children }) => {
  const [me, setMe] = useState(null);
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const { data } = await client.query({ query: GET_ME });
        setMe(data.me);
      } catch (error) {
        console.error("Error fetching works:", error);
      }
    };

    fetchMe();
  }, []);
  return <MeContext.Provider value={{ me }}>{children}</MeContext.Provider>;
};

export const useMe = () => {
  return useContext(MeContext);
};
