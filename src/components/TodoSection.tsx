import React, {useState} from "react";
import {AddTodo, TodoApp} from "@fefo/todo-app";
import {BrowserStore} from "@fefo/toggl-dashboard/dist";
import {TrashButton} from "@fefo/toggl-dashboard/dist";
import styled from "styled-components";

const NAMESPACE = 'TodoSection:todo-lists';

const StyleWrapper = styled.section`
  padding: 16px;
  
  ul {
    padding: 0;
    list-style: none;
    
    li {
      padding: 0;
      position: relative;
      
      & > button {
        position: absolute;
        right: 0;
        top: 36px
      }
    }
  }

`

export function TodoSection() {
    const storedTodoLists = BrowserStore.get(NAMESPACE);
    const [todoLists, setList] = useState<string[]>(storedTodoLists || []);
    const addTodoList = (todoList: string) => {
        const newState = todoLists.concat(todoList)
        BrowserStore.set(NAMESPACE, newState)
        setList(newState)
    }
    const removeTodoList = (todoList: string) => {
        const newState = todoLists.filter(t => t !== todoList)
        BrowserStore.set(NAMESPACE, newState)
        setList(newState)
    }


    return (
        <StyleWrapper>
            <AddTodo placeholder="Añade una nueva lista" addTodo={addTodoList}/>
            <ul>
                {todoLists.map(todoList =>
                    <li key={todoList}>
                        <TrashButton onClick={() => removeTodoList(todoList)} size={24}/>
                        <TodoApp title={todoList}/>
                    </li>)}
            </ul>

        </StyleWrapper>
    )
}