import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";

const App = () => {
  return (
    <>
      <div className="bg-slate-900 text-white">
        <RouterProvider router={MainRouter} />
      </div>
    </>
  );
};

export default App;
