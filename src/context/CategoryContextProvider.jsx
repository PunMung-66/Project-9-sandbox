import React from "react";
import useBaseState from "../hooks/useBaseState";
import { getData } from "../utils/apiHandler";
import { loadLocal, LOCALSTORAGE_KEY, saveToLocal } from "../utils/loacl";

const CategoryContext = React.createContext(null);

export const useCategoryContext = () => {
  const ctx = React.useContext(CategoryContext);
  if (!ctx)
    throw new Error(
      "useCategoryContext must be used in CategoryContextProvider"
    );
  return ctx;
};

function CategoryContextProvider({ children }) {
  const { data, isLoading, erorr, setSuccess, setLoading, setError } =
    useBaseState();

  const possibleCategoryList =
    data?.map(({ name, permalink }) => ({ label: name, path: permalink })) ??
    [];
  React.useEffect(() => {
    setLoading();
    const localData = loadLocal(LOCALSTORAGE_KEY.categories);
    if (localData) {
      setSuccess(localData);
      return;
    }
    (async () => {
      try {
        const resData = await getData("categories");
        setSuccess(resData);
        saveToLocal(LOCALSTORAGE_KEY.categories)(resData, 3);
      } catch (error) {
        setError(erorr);
      }
    })();
  }, []);
  return (
    <CategoryContext.Provider
      value={{ categoryList: data, erorr, isLoading, possibleCategoryList }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryContextProvider;
