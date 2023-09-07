import Messages from "@/app/login/messages";

export const dynamic = "force-dynamic";

type ServiceFormProps = {
  services: Array<string>[] | undefined;
};

const ServiceForm = ({ services }: ServiceFormProps) => {
  return (
    <form method="post">
      <div className="flex-1 flex flex-col w-screen justify-center items-center gap-2 text-foreground px-4 text-black dark:text-white">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-6">
            <select
              className="px-4 py-2 border-4 w-full border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white mb-6"
              name="services"
              required
            >
              {services?.map((service) => (
                <option value={service}>{service}</option>
              ))}
            </select>
          </div>
          <button
            className={`bg-green-700 px-4 py-2 mb-2 w-[250px] text-white`}
          >
            Sign In
          </button>
          <Messages />
        </div>
      </div>
    </form>
  );
};

export default ServiceForm;
