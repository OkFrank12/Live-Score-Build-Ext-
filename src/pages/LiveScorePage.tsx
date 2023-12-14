import { getLiveScoreFixtures } from "../api/API";
import images from "../assets/balon-adidas-champions-league-ucl-pro-sala-2022-2023-white-silver-metallic-bright-cyan-0-removebg-preview.png";
import Datas from "../statics/Datas";
import { useState, useEffect } from "react";

const LiveScorePage = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const onToggleState = () => {
    setToggle(!toggle);
  };

  const [state, setState] = useState<Array<{}>>([]);

  useEffect(() => {
    setState(JSON.parse(localStorage.getItem("livescores")!));
  }, [state]);

  return (
    <>
      <div className=" ml-[690px] p-1 flex flex-col">
        <div className="w-[815px] fixed rounded-3xl flex h-[250px] bg-slate-800">
          <div className="w-[70%] h-full  p-5">
            <p className="font-bold text-[40px]">This is a Livescore App</p>
            <span className="text-[20px]">
              Experience greater livescore experience on our well detailed and
              streamlined scores... Today!!!
            </span>
            <button 
              onClick={() => {
                const data = "2020-02-06";
                getLiveScoreFixtures()
                .then((res: any) => {
                    console.log(res)
                    localStorage.setItem(
                      "livescores",
                      JSON.stringify(res)
                    );
                  })
                  .then(() => {
                    onToggleState();
                  });
              }}
              className="px-10 py-3 text-slate-700 mt-3 bg-white rounded-md hover:rounded-none"
            >
              {!toggle ? "View LiveScores" : "Close LiveScores"}
            </button>
          </div>
          <img
            src={images}
            className="absolute w-[30%] top-[-130px] h-[500px] right-3 object-cover"
          />
        </div>
        <div className="mt-[300px]"></div>
        {toggle && (
          <>
            {state?.map((props: any) => {
              return <Datas props={props} />;
            })}
          </>
        )}
      </div>
    </>
  );
};

export default LiveScorePage;
