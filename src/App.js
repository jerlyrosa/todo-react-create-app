import React,{ Fragment,useState }  from "react";
import TodoCounter from "./components/todo-counter";
import TodoSearch from "./components/todo-search";
import TodoList from "./components/todo-list";
import TodoItem from "./components/todo-item";
import CreateTodoButton from "./components/create-todo-button";
import GlobalStyle from './components/styles/globalStyles.js'
import styled from "styled-components";
import Header from "./components/header";

const  defaulTodos =[
  {text: 'Conocer cultura nordicaaaaaa aaaaa aaaaaaa', completed:false},
  {text: 'Estudiar React', completed:true},
  {text: 'Ver anime', completed:false},


];

function App() {



  const [todos, setTodo] = useState(defaulTodos);
  const [searchValue, setSearch] = useState('');


  const compledTodos = todos.filter(todo => todo.completed).length;

  const totalTodos = todos.length;

  let searchedTodos =[];

  if(!searchValue.length >= 1){
      searchedTodos = todos;

  } else{
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
    return  todoText.includes(searchText);
    })
  }

  const toggleCompleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodo(newTodos);
  }

  const DeleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
     newTodos.splice(todoIndex,1);
    setTodo(newTodos);
  }

  return (
    <Fragment>
      <GlobalStyle />
      <Header/>
      <Container>
      <TodoSearch 
        searchValue={searchValue} 
        setSearch={setSearch}
        />
      <TodoCounter
        total={totalTodos}
        compled={compledTodos}
      />
      <TodoList>{
        searchedTodos.length > 0 ? (             
          searchedTodos.map((item, index) => {
            return <TodoItem 
            key={item.text} 
            text={item.text} 
            compled={item.completed}
            onCompled={()=> toggleCompleteTodos(item.text)}
            onDelete={()=> DeleteTodo(item.text)}
            />;
          })
        ):searchValue.length > 0 ?(
          <h3>{`There are no tasks with the name ${searchValue} 😐 `}</h3>
        ):(
          <h3>{`No Tasks 🙃`}</h3>
        )

      }
      </TodoList>
      <CreateTodoButton />
      </Container>
    </Fragment>
  );
}

export default App;
const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;

`;


