import React, {useState} from 'react';
import GlobalStyle from "./styles/global";
import { themes, colors } from "./styles/themes";
import ThemeContext from "./styles/ThemeContext";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard"


function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.dark);

  const handleThemeChange = () => {
    currentTheme === themes.light
      ? setCurrentTheme(themes.dark)
      : setCurrentTheme(themes.light);
  };

  return (
    <>
      <ThemeContext.Provider value={currentTheme}>
        <GlobalStyle theme={currentTheme} />
        <Header theme={currentTheme} handleThemeChange={handleThemeChange}/>
        <Dashboard theme={currentTheme}/>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
