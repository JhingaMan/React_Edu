import React from "react";
import "./App.css"; // For custom styling

const App = () => {
  const teams = [
    { name: "TheMorpheusCollective", progress: "5/6", time: "32:04" },
    { name: "Team Offset", progress: "3/6", time: "62:54" },
    { name: "Team Offset", progress: "3/6", time: "62:54" },
    { name: "Team Offset", progress: "3/6", time: "62:54" },
  ];

  return (
    <div className="flex bg-[#20202C] items-start justify-between gap-8 pt-8 pr-8 pl-4 h-screen">
      <div className="flex justify-end  flex-col h-full">
        <div className="pl-2">
          <div className="text-6xl py-8 font-Raleway font-bold ">
            <span className="font-thin">CODE</span>-BREAKER
          </div>
          <div className="flex items-center justify-center">
            <span className="font-thin text-5xl">by</span>
            <img src="src/assets/Logo2.svg" className="inline ml-4 " />
          </div>
        </div>
        <div className="flex flex-start w-full">
          <img src="src\assets\Mascot.png" className="w-[25rem] " />
        </div>
      </div>
      <div className="flex items-start w-fit">
        <div className="flex border-solid border-4 border-[#C6837D] rounded-2xl w-[50rem] mt-8">
          <div className="flex flex-[3] flex-col">
            <div className="text-[#99BEFF] pt-5 pb-3 pl-4 border-r-4 border-b-4 border-[#C6837D] font-bold">
              Team Name
            </div>
            {teams.map((team, index) => (
              <div key={index} className="p-4 border-r-4 border-[#C6837D]">
                {team.name}
              </div>
            ))}
          </div>
          <div className="flex flex-1 flex-col">
            <div className="text-[#99BEFF] pt-5 pb-3 border-r-4 border-b-4 border-[#C6837D] font-bold text-center">
              Progress
            </div>
            {teams.map((team, index) => (
              <div
                key={index}
                className="p-4 border-r-4 border-[#C6837D] text-center"
              >
                {team.progress}
              </div>
            ))}
          </div>
          <div className="flex flex-1 flex-col">
            <div className="text-[#99BEFF] pt-5 pb-3 border-b-4 border-[#C6837D] text-center font-bold text-mono">
              Time
            </div>
            {teams.map((team, index) => (
              <div key={index} className="p-4 text-center ">
                {team.time}
              </div>
            ))}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
