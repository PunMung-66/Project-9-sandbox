import React from "react";
import useBaseState from "../hooks/useBaseState";
import { getData } from "../utils/apiHandler";
import { loadLocal, LOCALSTORAGE_KEY, saveToLocal } from "../utils/loacl";

const CollectionContext = React.createContext(null);

export const useCollectionContext = () => {
  const ctx = React.useContext(CollectionContext);
  if (!ctx)
    throw new Error(
      "useCollectionContext must be used in CollectionContextProvider"
    );
  return ctx;
};

function CollectionContextProvider({ children }) {
  const { data, erorr, isLoading, setError, setLoading, setSuccess } =
    useBaseState();

  const possibleList =
    data?.map(({ name, permalink }) => ({
      label: name,
      path: permalink,
    })) ?? [];

  React.useEffect(() => {
    setLoading();
    const localData = loadLocal(LOCALSTORAGE_KEY.collections);
    if (localData) {
      setSuccess(localData);
      return;
    }
    (async () => {
      try {
        const resData = await getData("collections");
        setSuccess(resData);
        saveToLocal(LOCALSTORAGE_KEY.collections)(resData, 3);
      } catch (error) {
        setError(erorr);
      }
    })();
  }, []);
  return (
    <CollectionContext.Provider
      value={{ collectionList: data, possibleList, erorr, isLoading }}
    >
      {children}
    </CollectionContext.Provider>
  );
}

export default CollectionContextProvider;
