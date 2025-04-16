import Carousel from "../components/Carousel.jsx";
import ButtonSel from "../components/ButtonSel.jsx";
import MovieCard from "../components/MovieCard.jsx";
import ButtonGenre from "../components/ButtionGenre.jsx";

const button = [
  {
    id: 1,
    title: "Action",
  },
  {
    id: 2,
    title: "Comedy",
  },
  {
    id: 3,
    title: "Action",
  },
  {
    id: 4,
    title: "Action",
  },
  {
    id: 5,
    title: "Action",
  },
  {
    id: 6,
    title: "Action",
  },
  {
    id: 7,
    title: "Action",
  },
  {
    id: 8,
    title: "Action",
  },
  {
    id: 9,
    title: "Action",
  },
  {
    id: 9,
    title: "Action",
  },
  {
    id: 9,
    title: "Action",
  },
  {
    id: 9,
    title: "Action",
  },
  {
    id: 9,
    title: "Action",
  },
  {
    id: 9,
    title: "Action",
  },
  {
    id: 9,
    title: "Action",
  },
  {
    id: 9,
    title: "Action",
  },
  {
    id: 9,
    title: "Action",
  },
  {
    id: 9,
    title: "Action",
  },
  {
    id: 9,
    title: "Action",
  },
  {
    id: 9,
    title: "Action",
  },
];

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
];

const Beranda = () => {
  return (
    <>
      <Carousel />
      <div className="body mx-auto py-6 md:py-10 px-4 md:px-8">
        <div className="sedangtayang px-2 md:px-6 mb-10 md:mb-20">
          <div className="title flex flex-row justify-between text-white items-center">
            <h3 className="text-xl md:text-2xl font-bold">Sedang Tayang</h3>
            <div className="mr-2 md:mr-5">
              <ButtonSel />
            </div>
          </div>
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
        <div className="terpopuler px-2 md:px-6 mb-10 md:mb-20">
          <div className="title flex flex-row justify-between text-white items-center">
            <h3 className="text-xl md:text-2xl font-bold">Terpopuler</h3>
            <div className="mr-2 md:mr-5">
              <ButtonSel />
            </div>
          </div>
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
        <div className="terpopuler px-2 md:px-6 mb-10 md:mb-20">
          <div className="title flex flex-row justify-between text-white items-center">
            <h3 className="text-xl md:text-2xl font-bold">Terpopuler</h3>
            <div className="mr-2 md:mr-5">
              <ButtonSel />
            </div>
          </div>
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
        <div className="genre px-2 md:px-6">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            Genre Tersedia
          </h3>
          <div className="mt-4 flex flex-row flex-wrap gap-4 md:gap-8 justify-center md:justify-start">
            {button.map((button) => (
              <ButtonGenre key={button.id} title={button.title} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Beranda;
