import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import SafeComponent from "./SafeComponent";
import "./index.scss";

const Header = lazy(() => import("header_component/Header"));
const Footer = lazy(() => import("footer_component/Footer"));
const Counter = lazy(() => import("counter_component/Counter"));

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const props = { count, increment, decrement };

  return (
    <div className="w-full h-full">
      <SafeComponent>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Header heading="Shell" />
        </Suspense>
      </SafeComponent>
      <h1 className="text-center m-20 text-red-400 text-4xl">Name: shell</h1>
      <SafeComponent>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Counter {...props} />
        </Suspense>
      </SafeComponent>
      <br />
      <br />
      <SafeComponent>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Footer heading="Shell" />
        </Suspense>
      </SafeComponent>
    </div>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
