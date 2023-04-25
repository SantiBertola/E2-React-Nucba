import { createContext, useContext, useState } from "react";

const Context = createContext();
export const useThemeContext = () => useContext(Context);

export const ThemeContextProvider = ({ children }) => {


  const [visible, setVisible] = useState(true);
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('task')) ||[]);
    
  const ContextData = { visible, setVisible, todoList, setTodoList };
    

  return (
    <Context.Provider value={ContextData}>
      {children}
    </Context.Provider>
  );
};

