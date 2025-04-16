import carousel from "../assets/carousel.png";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div className="bg-black text-white  relative z-10">
      <div className="movie-card relative">
        <div className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <img
            src={carousel}
            alt="Indiana Jones and The Dial Of Destiny movie poster"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-start p-4 md:p-8 lg:p-12">
          <div className="text-xs md:text-sm mb-1 md:mb-2">
            ADVENTURE • ACTION • HISTORY
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4 leading-tight">
            Indiana Jones and The Dial Of Destiny
          </h1>
          <div className="flex items-center mb-2 md:mb-4">
            <span className="text-xs md:text-sm bg-gray-700 px-2 py-1 rounded">
              16+
            </span>
          </div>

          <div className="flex flex-col justify-evenly space-y-2 md:space-y-4">
            <div className="flex flex-row items-center">
              <i className="flex items-center gap-1">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 text-yellow-200 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                9.0
              </i>
              <span className="ml-2 md:ml-4 text-xs md:text-sm">
                2023 | 1h 55m
              </span>
            </div>
            <p className="text-xs md:text-sm w-full md:w-3/4 lg:w-1/2 hidden sm:block">
              Menemukan dirinya berada di era baru, dan mendekati masa pensiun,
              Indy bergulat dengan dunia yang tampaknya sudah melampaui
              batasnya. Namun saat tentakel kejahatan yang sangat familiar
              kembali dalam wujud rival lama.
            </p>
            <p className="text-xs md:text-sm hidden sm:block">
              Dibintangi: Winona Ryder, David Harbour, Millie Bobby Brown
            </p>
          </div>
          <Link to="/detail-film">
            <button className="bg-red-600 gap-1 md:gap-2 flex flex-row items-center text-white px-3 py-1 md:px-4 md:py-2 rounded hover:bg-red-700 mt-4 md:mt-6 lg:mt-10 text-sm md:text-base">
              <svg
                className="w-4 h-4 md:w-6 md:h-6 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                />
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              Lihat Film
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
