import { useState,useEffect } from "react";

const useLocalStorage = (itemName, inicialValue) => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(inicialValue);
  const [userName, setUser] = useState(null);

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
    try {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
  
      setItem(newItem);
    } catch (error) {
      setError(error)
    }

  };



  useEffect(() => {
  const localStorageUser= localStorage.getItem("UserName");

    if(localStorage.getItem("UserName") !== null){
          let {user} = JSON.parse(localStorageUser);
          setUser(user)

    }    
  
    }
  ,[localStorage.getItem("UserName")])

  return {
    item,
    saveItem,
    loading,
    error,
    setItem,
    onChangeOrder,
    userName
  };
};

export default useLocalStorage;
