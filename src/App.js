
import { createContext, useState } from "react";
import Form from "./component/form";
import Switch from "react-switch";
/*-----------------------------------------------*/
import './App.css';
/*-----------------------------------------------*/
export const ThemeContext = createContext(null);
/*----------------------------------------------*/

const App = () => {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main  id={theme}>
        <div className="form-container">
          <h1 align="center">
            Sign in
          </h1>
          <Form></Form>
        </div>
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <Switch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
