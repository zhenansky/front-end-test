import MovieCard from "../components/MovieCard.jsx";

const movies = [
  {
    id: 1,
    title: "Baby Driver",
    year: "2017",
    hour: "1h 53m",
    imageUrl: "https://i.ibb.co.com/p62LVbdf/babydriver.png",
    link: "/movie/avengers-endgame",
  },
  {
    id: 2,
    title: "Squid Game",
    year: "2017",
    hour: "1h 53m",
    imageUrl: "https://i.ibb.co.com/kgkBhdXM/squid.jpg",
    link: "/movie/avengers-endgame",
  },
  {
    id: 3,
    title: "Titans",
    year: "2017",
    hour: "1h 53m",
    imageUrl: "https://i.ibb.co.com/YF91SzmK/titans.png",
    link: "/movie/avengers-endgame",
  },
  {
    id: 4,
    title: "Wednesday",
    year: "2017",
    hour: "1h 53m",
    imageUrl: "https://i.ibb.co.com/JWtqddHF/wednesday.jpg",
    link: "/movie/avengers-endgame",
  },
  {
    id: 5,
    title: "The WItcher",
    year: "2017",
    hour: "1h 53m",
    imageUrl: "https://i.ibb.co.com/V0FJd5QF/thewitcher.jpg",
    link: "/movie/avengers-endgame",
  },
  {
    id: 6,
    title: "1899",
    year: "2017",
    hour: "1h 53m",
    imageUrl: "https://i.ibb.co.com/pvNrBwYS/1899.jpg",
    link: "/movie/avengers-endgame",
  },
  {
    id: 1,
    title: "Baby Driver",
    year: "2017",
    hour: "1h 53m",
    imageUrl: "https://i.ibb.co.com/p62LVbdf/babydriver.png",
    link: "/movie/avengers-endgame",
  },
  {
    id: 2,
    title: "Squid Game",
    year: "2017",
    hour: "1h 53m",
    imageUrl: "https://i.ibb.co.com/kgkBhdXM/squid.jpg",
    link: "/movie/avengers-endgame",
  },
  {
    id: 3,
    title: "Titans",
    year: "2017",
    hour: "1h 53m",
    imageUrl: "https://i.ibb.co.com/YF91SzmK/titans.png",
    link: "/movie/avengers-endgame",
  },
  {
    id: 4,
    title: "Wednesday",
    year: "2017",
    hour: "1h 53m",
    imageUrl: "https://i.ibb.co.com/JWtqddHF/wednesday.jpg",
    link: "/movie/avengers-endgame",
  },
  {
    id: 5,
    title: "The WItcher",
    year: "2017",
    hour: "1h 53m",
    imageUrl: "https://i.ibb.co.com/V0FJd5QF/thewitcher.jpg",
    link: "/movie/avengers-endgame",
  },
  {
    id: 6,
    title: "1899",
    year: "2017",
    hour: "1h 53m",
    imageUrl: "https://i.ibb.co.com/pvNrBwYS/1899.jpg",
    link: "/movie/avengers-endgame",
  },
  {
    id: 1,
    title: "Baby Driver",
    year: "2017",
    hour: "1h 53m",
    imageUrl: "https://i.ibb.co.com/p62LVbdf/babydriver.png",
    link: "/movie/avengers-endgame",
  },
  {
    id: 2,
    title: "Squid Game",
    year: "2017",
    hour: "1h 53m",
    imageUrl: "https://i.ibb.co.com/kgkBhdXM/squid.jpg",
    link: "/movie/avengers-endgame",
  },
  {
    id: 3,
    title: "Titans",
    year: "2017",
    hour: "1h 53m",
    imageUrl: "https://i.ibb.co.com/YF91SzmK/titans.png",
    link: "/movie/avengers-endgame",
  },
  {
    id: 4,
    title: "Wednesday",
    year: "2017",
    hour: "1h 53m",
    imageUrl: "https://i.ibb.co.com/JWtqddHF/wednesday.jpg",
    link: "/movie/avengers-endgame",
  },
  {
    id: 5,
    title: "The WItcher",
    year: "2017",
    hour: "1h 53m",
    imageUrl: "https://i.ibb.co.com/V0FJd5QF/thewitcher.jpg",
    link: "/movie/avengers-endgame",
  },
  {
    id: 6,
    title: "1899",
    year: "2017",
    hour: "1h 53m",
    imageUrl: "https://i.ibb.co.com/pvNrBwYS/1899.jpg",
    link: "/movie/avengers-endgame",
  },
];

const SedangTayang = () => {
  return (
    <>
      <div className="my-20 px-10">
        <h2 className="text-3xl text-white">Sedang Tayang</h2>
        <div className="mt-4 flex flex-row flex-wrap gap-4 md:gap-8 justify-center">
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
        <div>
          <button className="bg-red-600 gap-1 md:gap-2 flex flex-row items-center text-white px-3 py-1 md:px-4 md:py-2 rounded hover:bg-red-700 mt-4 md:mt-6 lg:mt-10 text-sm md:text-base">
            Lebih Banyak
            <svg
              class="w-6 h-6 dark:text-white"
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
                d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default SedangTayang;
