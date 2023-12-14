import { IoIosArrowDown } from "react-icons/io";
import laliga from "../assets/laliga.png";
import bundes from "../assets/bundesliga.jpg";
import mls from "../assets/mls.jpg";
import eredivise from "../assets/eredivise.png";
import major from "../assets/major.png";
import premier from "../assets/premier league.jpg";
import het from "../assets/het.jpg";
import naija from "../assets/nigeria.jpg";
import superLiga from "../assets/superliga.jpg";
import uefa from "../assets/uefa.png";

const Sider = () => {
  return (
    <>
      <div className="w-[270px] rounded-3xl fixed p-3 h-[94%] bg-slate-800">
        <div className="w-full flex font-bold text-[18px] justify-between items-center">
          <p className="">My Leagues</p>
          <IoIosArrowDown />
        </div>
        <div className="w-full flex py-1 mt-3 hover:bg-slate-600 transition-all duration-500 cursor-pointer items-center">
          <img
            src={laliga}
            className="w-[40px] mr-2 border-slate-700 border-[1px] h-[40px] rounded-full object-cover"
          />
          <span>LA liga</span>
        </div>
        <div className="w-full flex py-1 mt-3 hover:bg-slate-600 transition-all duration-500 cursor-pointer items-center">
          <img
            src={bundes}
            className="w-[40px] mr-2 border-slate-700 border-[1px] h-[40px] rounded-full object-cover"
          />
          <span>Bundesliga</span>
        </div>
        <div className="w-full flex py-1 mt-3 hover:bg-slate-600 transition-all duration-500 cursor-pointer items-center">
          <img
            src={mls}
            className="w-[40px] mr-2 border-slate-700 border-[1px] h-[40px] rounded-full object-cover"
          />
          <span>MLS Leagues</span>
        </div>
        <div className="w-full flex py-1 mt-3 hover:bg-slate-600 transition-all duration-500 cursor-pointer items-center">
          <img
            src={eredivise}
            className="w-[40px] mr-2 border-slate-700 border-[1px] h-[40px] rounded-full object-cover"
          />
          <span>Eredivise</span>
        </div>
        <div className="w-full flex py-1 mt-3 hover:bg-slate-600 transition-all duration-500 cursor-pointer items-center">
          <img
            src={het}
            className="w-[40px] mr-2 border-slate-700 border-[1px] h-[40px] rounded-full object-cover"
          />
          <span>HET Leagues</span>
        </div>
        <div className="w-full flex py-1 mt-3 hover:bg-slate-600 transition-all duration-500 cursor-pointer items-center">
          <img
            src={naija}
            className="w-[40px] mr-2 border-slate-700 border-[1px] h-[40px] rounded-full object-cover"
          />
          <span>Nigerian Pro League</span>
        </div>
        <div className="w-full flex py-1 mt-3 hover:bg-slate-600 transition-all duration-500 cursor-pointer items-center">
          <img
            src={uefa}
            className="w-[40px] mr-2 border-slate-700 border-[1px] h-[40px] rounded-full object-cover"
          />
          <span>Champions League</span>
        </div>
        <div className="w-full flex py-1 mt-3 hover:bg-slate-600 transition-all duration-500 cursor-pointer items-center">
          <img
            src={superLiga}
            className="w-[40px] mr-2 border-slate-700 border-[1px] h-[40px] rounded-full object-cover"
          />
          <span>Superliga Argentina</span>
        </div>
        <div className="w-full flex py-1 mt-3 hover:bg-slate-600 transition-all duration-500 cursor-pointer items-center">
          <img
            src={major}
            className="w-[40px] mr-2 border-slate-700 border-[1px] h-[40px] rounded-full object-cover"
          />
          <span>Major Leagues</span>
        </div>
        <div className="w-full flex py-1 mt-3 hover:bg-slate-600 transition-all duration-500 cursor-pointer items-center">
          <img
            src={premier}
            className="w-[40px] mr-2 border-slate-700 border-[1px] h-[40px] rounded-full object-cover"
          />
          <span>Premier League</span>
        </div>
      </div>
    </>
  );
};

export default Sider;
