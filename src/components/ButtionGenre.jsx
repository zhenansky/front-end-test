const ButtonGenre = ({ title }) => {
  return (
    <>
      <button
        type="button"
        class="text-white border border-slate-200 bg-transparent hover:text-red-400 hover:border-red-400 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {title}
      </button>
    </>
  );
};

export default ButtonGenre;
