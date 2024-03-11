import { useState } from "react";
import edit from "../assets/icons/edit.svg";
import rise from "../assets/icons/rise.svg";
import downArrow from "../assets/icons/downArrow.svg";
import { ResponsiveLineChart } from "./ResponsiveLineChart";

export const DemoPanel = () => {
  const [toggleButton, setToggleButton] = useState(false);
  const [cardIsActive, setCardisActive] = useState("Online store sessions");

  enum CardNames {
    OnlineStoreSessions = "Online store sessions",
    NetReturnValue = "Net return value",
    TotalOrders = "Total orders",
    ConversionRate = "Conversion rate",
  }
  return (
    <div className="min-w-793px max-w-793px mx-auto mb-4 flex flex-col justify-center items-stretch md:flex-row md:justify-between shadow-outer bg-white p-2.5 rounded-10">
      <div className="flex flex-col w-full">
        <div className="flex w-full gap-1">
          <div
            className={`w-1/4 px-2.5 py-1.25 hover:bg-card rounded-10 ${
              cardIsActive === CardNames.OnlineStoreSessions
                ? "bg-card"
                : "hover:bg-card"
            }`}
            onClick={() => setCardisActive(CardNames.OnlineStoreSessions)}
          >
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

          <div
            className={`w-1/4 px-2.5 py-1.25 hover:bg-card rounded-10 ${
              cardIsActive === CardNames.NetReturnValue
                ? "bg-card"
                : "hover:bg-card"
            }`}
            onClick={() => setCardisActive(CardNames.NetReturnValue)}
          >
            <div className="flex justify-between mb-2">
              <div className="font-medium text-xs leading-4 underline decoration-dashed underline-offset-4 decoration-slate-300">
                Net return value
              </div>
              <img src={edit} alt="edit" width={13} />
            </div>
            <div className="flex gap-1">
              <div className="text-15px font-normal leading-6">-$15,07.44</div>
              <img src={rise} />
              <div className="text-10px  self-center text-primary-grey">
                14%
              </div>
            </div>
          </div>
          <div
            className={`w-1/4 px-2.5 py-1.25 hover:bg-card rounded-10 ${
              cardIsActive === CardNames.TotalOrders
                ? "bg-card"
                : "hover:bg-card"
            }`}
            onClick={() => setCardisActive(CardNames.TotalOrders)}
          >
            <div className="flex justify-between mb-2">
              <div className="font-medium text-xs leading-4 underline decoration-dashed underline-offset-4 decoration-slate-300">
                Total orders
              </div>
              <img src={edit} alt="edit" width={13} />
            </div>
            <div className="flex gap-1">
              <div className="text-15px font-normal leading-6">10,511</div>
              <img src={rise} />
              <div className="text-10px  self-center text-primary-grey">2%</div>
            </div>
          </div>
          <div
            className={`w-1/4 px-2.5 py-1.25 hover:bg-card rounded-10 ${
              cardIsActive === CardNames.ConversionRate
                ? "bg-card"
                : "hover:bg-card"
            }`}
            onClick={() => setCardisActive(CardNames.ConversionRate)}
          >
            <div className="flex justify-between mb-2">
              <div className="font-medium text-xs leading-4 underline decoration-dashed underline-offset-4 decoration-slate-300">
                Conversion rate
              </div>
              <img src={edit} alt="edit" width={13} />
            </div>
            <div className="flex gap-1">
              <div className="text-15px font-normal leading-6">3.18%</div>
              <img src={rise} />
              <div className="text-10px  self-center text-primary-grey">7%</div>
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
