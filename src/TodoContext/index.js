import React,{createContext, useState} from "react";
import { v4 as uuidv } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";
import { useModal } from "../hooks/useModal";


const TodoContext = createContext();

const AppProvider = (props) =>{

    const { 
        item:todos,
        saveItem:saveTodos,
        loading, 
        error
        } = useLocalStorage('TODO_V1',[]);


    
      const [searchValue, setSearch] = useState("");
 
      const {ModalView,openModal,closeModal} = useModal();

      const compledTodos = todos.filter((todo) => todo.completed).length;
    
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if (!searchValue.length >= 1) {
        searchedTodos = todos;
      }  else {
        searchedTodos = todos.filter((todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();

          return todoText.includes(searchText) 
        });
    
      }

      const toggleCompleteTodos = (id) => {
        console.log(id);
        const todoIndex = todos.findIndex((todo) => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    
        saveTodos(newTodos);
      };

        //add todo

      const addTodo = ({...props}) => {
          const {
            title,
            content
          } = props;

        const newTodos = [...todos];
        newTodos.push({
          id:uuidv(),
          compled:false,
          creation_date:new Date().toLocaleString(),
          title,
          content,
        })    
        saveTodos(newTodos);
      };

    
      const DeleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
    
        saveTodos(newTodos);
      };
    
        return(
            <TodoContext.Provider value={{
                loading,
                error,
                totalTodos,
                compledTodos,
                searchValue,
                setSearch,
                searchedTodos,
                toggleCompleteTodos,
                DeleteTodo,
                addTodo,
                ModalView,
                openModal,
                closeModal
            }}>
                {props.children}
            </TodoContext.Provider>
        );

}


export { TodoContext, AppProvider };