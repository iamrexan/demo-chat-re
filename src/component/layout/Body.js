import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "../../route";
import { Chat } from "../../pages";

const Body = () => {
  const formRoute = (route, idx) => {
    return (
      <Route
        key={idx}
        path={route.path}
        name={route.name}
        element={<route.component />}
      />
    );
  };
  return (
    <div className="body">
      <div className="body-container">
        <Suspense fallback={"..loading"}>
          <BrowserRouter>
            <Routes>
              {routes.map((route, idx) => {
                if (typeof route.innerRoute == "undefined") {
                  return formRoute(route, idx);
                } else {
                  return (
                    <Route
                      exact
                      key={idx}
                      path={route.path}
                      name={route.name}
                      element={<route.component />}
                    >
                      {route.innerRoute.map((r, i) => {
                        return formRoute(r, i);
                      })}
                    </Route>
                  );
                }
              })}
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </div>
    </div>
  );
};

export default Body;
