import { createBrowserRouter } from "react-router-dom";
import LayOut from "../common/LayOut";
import LiveScorePage from "../pages/LiveScorePage";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: <LiveScorePage />,
      },
    ],
  },
]);
