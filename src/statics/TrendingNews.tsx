import pic from "../assets/leo_ronaldo.jpg";
import { PiBookmarksSimple } from "react-icons/pi";

const TrendingNews = () => {
  return (
    <>
      <div className="w-[400px] fixed ml-[280px] p-3 rounded-3xl min-h-[94%] bg-slate-800">
        <p className="font-bold text-[18px] w-full">
          Trending Sports News 💥💥
        </p>
        <img
          src={pic}
          className="w-full object-cover rounded-3xl h-[220px] my-4"
        />
        <div className="flex mb-5">
          <div>
            <p>
              Leo Messi and Cristiano Ronaldo Debates has come to a decision
            </p>
            <span className="text-slate-500 text-[13px]">
              about 2 hours ago
            </span>
          </div>
          <div className="text-[30px] text-slate-500">
            <PiBookmarksSimple />
          </div>
        </div>
        <div className="flex w-full my-2 justify-between">
          <img
            src={pic}
            className="w-[80px] mr-2 h-[80px] rounded-md object-cover"
          />
          <div>
            <p>The Squad for the trip to san snabastian...</p>
            <span className="text-slate-500 text-[13px]">
              22 AUGUST 2023, 14:16
            </span>
          </div>
          <div className="text-[30px] text-slate-500">
            <PiBookmarksSimple />
          </div>
        </div>
        <div className="flex w-full my-2 justify-between">
          <img
            src={pic}
            className="w-[80px] mr-2 h-[80px] rounded-md object-cover"
          />
          <div>
            <p>The Squad for the trip to san snabastian...</p>
            <span className="text-slate-500 text-[13px]">
              22 AUGUST 2023, 14:16
            </span>
          </div>
          <div className="text-[30px] text-slate-500">
            <PiBookmarksSimple />
          </div>
        </div>
        <div className="flex w-full my-2 justify-between">
          <img
            src={pic}
            className="w-[80px] mr-2 h-[80px] rounded-md object-cover"
          />
          <div>
            <p>The Squad for the trip to san snabastian...</p>
            <span className="text-slate-500 text-[13px]">
              22 AUGUST 2023, 14:16
            </span>
          </div>
          <div className="text-[30px] text-slate-500">
            <PiBookmarksSimple />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingNews;
