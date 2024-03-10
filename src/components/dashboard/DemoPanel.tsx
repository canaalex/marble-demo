import { useState } from "react";
import edit from "../assets/icons/edit.svg";
import rise from "../assets/icons/rise.svg";
import downArrow from "../assets/icons/downArrow.svg";
import { ResponsiveLineChart } from "./ResponsiveLineChart";

export const DemoPanel = () => {
  const [toggleButton, setToggleButton] = useState(false);
  return (
    <div className="min-w-793px max-w-793px mx-auto mb-4 flex flex-col justify-center items-stretch md:flex-row md:justify-between shadow-outer bg-white p-2.5 rounded-10">
      <div className="flex flex-col w-full">
        <div className="flex w-full gap-1">
          <div className="w-1/4 px-2.5 py-1.25 bg-card rounded-10">
            <div className="flex justify-between mb-2">
              <div className="font-medium text-xs leading-4 underline decoration-dashed underline-offset-4 decoration-slate-300">
                Online store sessions
              </div>
              <img src={edit} alt="edit" width={13} />
            </div>
            <div className="flex gap-1">
              <div className="text-15px font-normal leading-6"> 255,581</div>
              <img src={rise} />
              <div className="text-10px  self-center text-primary-grey">9%</div>
            </div>
          </div>
          <div className="w-1/4 px-2.5 py-1.25 bg-card rounded-10">
            <div className="flex justify-between mb-2">
              <div className="font-medium text-xs leading-4 underline decoration-dashed underline-offset-4 decoration-slate-300">
                Online store sessions
              </div>
              <img src={edit} alt="edit" width={13} />
            </div>
            <div className="flex gap-1">
              <div className="text-15px font-normal leading-6"> 255,581</div>
              <img src={rise} />
              <div className="text-10px  self-center text-primary-grey">9%</div>
            </div>
          </div>
          <div className="w-1/4 px-2.5 py-1.25 bg-card rounded-10">
            <div className="flex justify-between mb-2">
              <div className="font-medium text-xs leading-4 underline decoration-dashed underline-offset-4 decoration-slate-300">
                Online store sessions
              </div>
              <img src={edit} alt="edit" width={13} />
            </div>
            <div className="flex gap-1">
              <div className="text-15px font-normal leading-6"> 255,581</div>
              <img src={rise} />
              <div className="text-10px  self-center text-primary-grey">9%</div>
            </div>
          </div>
          <div className="w-1/4 px-2.5 py-1.25 bg-card rounded-10">
            <div className="flex justify-between mb-2">
              <div className="font-medium text-xs leading-4 underline decoration-dashed underline-offset-4 decoration-slate-300">
                Online store sessions
              </div>
              <img src={edit} alt="edit" width={13} />
            </div>
            <div className="flex gap-1">
              <div className="text-15px font-normal leading-6"> 255,581</div>
              <img src={rise} />
              <div className="text-10px  self-center text-primary-grey">9%</div>
            </div>
          </div>
          <button
            className="ml-1"
            onClick={() => setToggleButton(!toggleButton)}
          >
            <img src={downArrow} alt="arrow" />
          </button>
        </div>
        {toggleButton && <ResponsiveLineChart />}
      </div>
    </div>
  );
};
