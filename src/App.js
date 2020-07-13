import React, {useState} from 'react';
import GlobalStyle from "./styles/global";
import { themes, colors } from "./styles/themes";
import ThemeContext from "./styles/ThemeContext";


function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const handleThemeChange = () => {
    currentTheme === themes.light
      ? setCurrentTheme(themes.dark)
      : setCurrentTheme(themes.light);
  };

  return (
    <>
      <ThemeContext.Provider value={currentTheme}>
        <GlobalStyle theme={currentTheme} />
        <div style={{height:"100px", width:"100px", backgroundColor:currentTheme.bg}}>
          <p  style={{color: currentTheme.contrastText}}>OI</p>
        </div>
        <button onClick={()=>handleThemeChange()}> MUDE O ESTILO </button>

      </ThemeContext.Provider>
    </>
  );
}

export default App;
