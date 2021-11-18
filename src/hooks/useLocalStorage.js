import { useState,useEffect } from "react";

const useLocalStorage = (itemName, inicialValue) => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(inicialValue);


  useEffect(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(inicialValue));
          parsedItem = inicialValue;
        } else {


          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);
        
      } catch (error) {
        setError(error)
        
      }
    
  }, [])



  const onChangeOrder = (newOrder) => {
    try {
      const stringifiedTodos = JSON.stringify(newOrder);
      localStorage.setItem(itemName, stringifiedTodos);
  
      setItem(newOrder);
    } catch (error) {
      setError(error)
    }

  };

  const saveItem = (newItem) => {
    console.log("aca entro")
    try {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
  
      setItem(newItem);
    } catch (error) {
      setError(error)
    }

  };



  return {
    item,
    saveItem,
    loading,
    error,
    setItem,
    onChangeOrder
  };
};

export default useLocalStorage;
