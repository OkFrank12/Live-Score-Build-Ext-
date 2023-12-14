import { Outlet } from "react-router-dom";
import Sider from "../statics/Sider";
import TrendingNews from "../statics/TrendingNews";

const LayOut = () => {
  return (
    <>
      <div className="w-full m-0 overflow-hidden min-h-screen flex  justify-between  p-5">
        <Sider />
        <TrendingNews />
        <Outlet />
      </div>
    </>
  );
};

export default LayOut;
