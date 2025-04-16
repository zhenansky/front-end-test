const ButtonSel = () => {
  return (
    <>
      <button className="bg-red-600 gap-2 items-center text-sm flex flex-row text-white px-6 py-3 rounded hover:bg-red-700">
        Lebih Banyak
        <svg
          class="w-5 h-5 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m9 5 7 7-7 7"
          />
        </svg>
      </button>
    </>
  );
};

export default ButtonSel;
