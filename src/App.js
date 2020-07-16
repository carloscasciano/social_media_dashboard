import React, { useState } from "react";
import GlobalStyle from "./styles/global";
import { themes } from "./styles/themes";
import ThemeContext from "./styles/ThemeContext";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import { dummyDataMainCards, dummyDataSubCards } from "./dummyData/dummyData";


function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const handleThemeChange = () => {
    currentTheme === themes.light
      ? setCurrentTheme(themes.dark)
      : setCurrentTheme(themes.light);
  };

  return (
    <ThemeContext.Provider value={currentTheme}>
      <GlobalStyle theme={currentTheme} />
      <Header theme={currentTheme} handleThemeChange={handleThemeChange} />
      <Dashboard
        theme={currentTheme}
        mainCardsData={dummyDataMainCards}
        subCardsData={dummyDataSubCards}
      />
    </ThemeContext.Provider>
  );
}

export default App;
