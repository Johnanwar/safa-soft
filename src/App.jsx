import { Route, Routes } from "react-router";
import { SnackbarProvider } from "./components/snackbar";
import ThemeProvider from "./theme";
import Home from "./pages/home";
import { SettingsProvider } from './components/settings/context';

function App() {
  return (
    <SettingsProvider
      defaultSettings={{
        themeMode: "light", // 'light' | 'dark'
        themeDirection: "ltr", //  'rtl' | 'ltr'
        themeContrast: "default", // 'default' | 'bold'
        themeLayout: "vertical", // 'vertical' | 'horizontal' | 'mini'
        themeColorPresets: "default", // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
        themeStretch: false,
      }}
    >
      <ThemeProvider>
        <SnackbarProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </SnackbarProvider>
      </ThemeProvider>
    </SettingsProvider>
  );
}

export default App;
