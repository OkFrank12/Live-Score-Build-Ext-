import { AiOutlineStar } from "react-icons/ai";

interface iProps {
  props: any;
}

const Datas: React.FC<iProps> = ({ props }) => {
  return (
    <>
      <div
        key={props?.id}
        className="flex justify-between w-[800px] items-center"
      >
        <div className="flex items-center mt-20">
          <img
            src={props?.league?.logo}
            className="mr-2 w-[50px] h-[50px] rounded-full"
          />
          <div className="mr-3">
            <p>{props?.league?.name}</p>
            <p className="text-slate-600 text-[13px]">
              {props?.league?.country}
            </p>
          </div>
          <div>
            <p>
              Venue:{" "}
              <span className="text-green-500">
                {props?.fixture?.venue?.name}
              </span>
            </p>
            <p>
              City:{" "}
              <span className="text-rose-500">
                {props?.fixture?.venue?.city}
              </span>
            </p>
          </div>
        </div>
        <span className="text-[13px] text-orange-500">
          {props?.fixture?.status?.long}
        </span>
      </div>
      <>
        <div className="w-full items-center flex p-3 min-h-[100px] justify-between border-[1px] rounded-3xl border-slate-800">
          <AiOutlineStar className="text-[40px] text-slate-600" />
          <span className="text-rose-600">
            {props?.fixture?.status?.elapsed}'
          </span>
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                src={props?.teams?.home?.logo}
                className="w-[50px] mr-5 h-[50px] rounded-full"
              />
              <span>{props?.teams?.home?.name}</span>
            </div>
            <div className="mx-5 px-10 py-2 bg-slate-800 rounded-3xl">
              <span className="mr-5">{props?.goals?.home}</span> :
              <span className="ml-5">{props?.goals?.away}</span>
            </div>
            <div className="flex items-center">
              <span>{props?.teams?.away?.name}</span>
              <img
                src={props?.teams?.away?.logo}
                className="w-[50px] ml-5 h-[50px] rounded-full"
              />
            </div>
          </div>
          <AiOutlineStar className="text-[40px] text-slate-600" />
        </div>
        <div className="w-full flex justify-center">
          referee: <span className="uppercase ml-2">{props?.fixture?.referee}</span>
        </div>
        {/* <div className="mt-2">Events</div>
        <div className="w-full p-5 items-center flex border-[1px] rounded-3xl min-h-[100px] border-slate-800">
          <span className="text-rose-600">5'</span>
          <img
            src={logo}
            className="w-[50px] mx-5 h-[50px] rounded-full border"
          />
          <div>
            <p className="text-slate-700">team name</p>
            <span>player name</span>
          </div>
        </div> */}
      </>
    </>
  );
};

export default Datas;
