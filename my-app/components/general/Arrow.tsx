const Arrow = () => {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.4375 18.75L4.6875 12L11.4375 5.25M5.625 12L19.3125 12"
          stroke="#0B0B0B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        />

        <path
          className="fill-black dark:fill-white"
          d="M11.082 97.634c-.68 1.411-1.635 2.492-2.866 3.241-1.232.75-2.42 1.125-3.567 1.125H0L46.173 4.167c.637-1.279 1.486-2.293 2.548-3.042C49.782.375 50.992 0 52.35 0H57L11.082 97.634Z"
        />
      </svg>
    </div>
  );
};

export default Arrow;
