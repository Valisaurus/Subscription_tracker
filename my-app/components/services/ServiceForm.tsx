import { useState } from "react";

type ServiceFormProps = {
  SubscriptionsAndServices: {
    subscription_name: string | null;
    subscription_price: number | null;
    subscription_id: number;
    service_name: string | null;
  }[];
  isVisible: boolean;
};

const ServiceForm = ({
  SubscriptionsAndServices,
  isVisible,
}: ServiceFormProps) => {
  const [trial, setTrial] = useState(false);
  const mappedServices =
    SubscriptionsAndServices?.map((subSer) => (
      <option key={subSer.subscription_id} value={subSer.subscription_id}>
        {subSer.service_name} - {subSer.subscription_name}{" "}
        {subSer.subscription_price}kr
      </option>
    )) ?? [];
  return isVisible ? (
    <div>
      <form action="services/addService" method="post" className="focus:ring-0">
        <div className="flex-1 flex flex-col w-screen justify-center items-center text-foreground px-4 text-black dark:text-white text-[20px]">
          <div className="flex flex-col justify-center items-center">
            <div className="w-[332px]">
              <select
                className="px-4 border-4 w-full h-[48px] border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-[10px] "
                name="subscription_id"
                required
              >
                <option value="0" key={0}>
                  Välj tjänst
                </option>
                {mappedServices}
              </select>
              <div className="flex items-center justify-between h-[48px] mb-[16px]">
                <label
                  htmlFor="has_trial"
                  className="text-black dark:text-white"
                >
                  <i>Testperiod?</i>
                </label>
                <div className="relative">
                  <input
                    type="checkbox"
                    name="has_trial"
                    onChange={() => setTrial(!trial)}
                    className="appearance-none contents-[''] checked:text-black checked:bg-white checked:dark:bg-black checked:dark:text-white w-[53px] h-[48px] border-4 border-black dark:border-white border-solid z-10"
                  />
                  <span
                    className={`absolute top-[7px] left-[8px] h-[30px] w-[30px] text-black z-0 ${
                      trial ? "block" : "hidden"
                    } bg-black dark:bg-white`}
                    style={{
                      clipPath:
                        "polygon(49% 66%, 85% 31%, 92% 37%, 50% 80%, 24% 56%, 31% 50%)",
                    }}
                  ></span>
                </div>
              </div>
              {trial ? (
                <div>
                  <label
                    htmlFor="trial_end_date"
                    className="text-black dark:text-white"
                  >
                    Välj slutdatum för testperiod:
                    <input
                      className="px-4 border-4 w-full border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-[10px] h-[48px]"
                      type="date"
                      name="trial_end_date"
                    />
                  </label>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <button className="px-4 mb-2 border-4 w-full border-black dark:border-white text-black dark:text-white h-[45px]">
              Lägg till i listan
            </button>
          </div>
        </div>
      </form>
    </div>
  ) : (
    <div></div>
  );
};

export default ServiceForm;
