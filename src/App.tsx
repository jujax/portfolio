import { Theme } from "@radix-ui/themes";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header";
import { ThemeProvider } from "./contexts/ThemeContext";
import routes from "./Routes";

function App() {
  return (
    <ThemeProvider>
      <Theme>
        <BrowserRouter>
          <Header />
            <main className="pt-24 px-4 bg-black text-white">
            <Routes>
              {routes.map((route) => (
              <Route
                key={route.path || ""}
                path={route.path}
                element={route.element}
              />
              ))}
            </Routes>
            </main>
        </BrowserRouter>
      </Theme>
    </ThemeProvider>
  );
}

export default App;
