import { Theme } from "@radix-ui/themes";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./component/Header";
import { ThemeProvider } from "./context/ThemeContext";
import routes from "./Routes";

function App() {
  return (
    <ThemeProvider>
      <Theme>
        <BrowserRouter>
          <Header />
          <main className="pt-24 mx-auto max-w-[1000px] px-4">
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
