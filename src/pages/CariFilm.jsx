import MovieCard from "../components/MovieCard";

const movies = [
  {
    id: 1,
    title: "Baby Driver",
    year: "2017",
    hour: "1h 53m",
    imageUrl: "https://i.ibb.co.com/p62LVbdf/babydriver.png",
    link: "/movie/avengers-endgame",
  },
];

const CariFilm = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4 md:px-10">
      <div className="flex flex-col justify-center items-center w-full">
        <form className="w-full max-w-7xl px-4">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-slate-500 border-b-2 border-slate-500 bg-transparent outline-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Cari Film...."
              required
            />
          </div>
        </form>
      </div>

      <div className="my-14 w-full md:ml-10">
        <div className="mt-4 flex flex-row flex-wrap gap-4 md:gap-8 justify-center md:justify-start">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.year}
              hour={movie.hour}
              imageUrl={movie.imageUrl}
              link={movie.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CariFilm;
