import carousel from "../assets/carousel.png";
import posterImage from "../assets/indiana.png"; // Anda perlu menambahkan poster terpisah

const Banner = () => {
  return (
    <div className="bg-[#080808] text-white relative overflow-hidden">
      <div className="movie-card relative">
        {/* Background image with gradient overlay */}
        <div className="w-full h-full overflow-hidden relative">
          <div className="absolute inset-0 opacity-20 z-10"></div>
          <img
            src={carousel}
            alt="Indiana Jones movie background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Content container */}
        <div className="absolute inset-0 flex z-20">
          {/* Poster column */}
          <div className="hidden md:block w-[120px] lg:w-[300px] p-4 lg:p-6 flex-shrink-0">
            <img
              src={posterImage || carousel} // Fallback to carousel if poster not available
              alt="Indiana Jones poster"
              className="h-full w-full object-contain rounded-md shadow-lg"
            />
          </div>

          {/* Info column */}
          <div className="flex flex-col justify-center p-4 md:p-5 md:pl-6 w-full md:ml-0">
            <div className="text-xs uppercase tracking-wider text-gray-300 mb-1">
              ADVENTURE • ACTION • HISTORY
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1.5 leading-tight">
              Indiana Jones and The Dial Of Destiny
            </h1>

            <div className="flex items-center space-x-2 mb-2.5">
              <span className="text-xs bg-gray-800 border border-gray-700 px-2 py-0.5 rounded-sm">
                16+
              </span>

              <div className="flex items-center text-xs">
                <svg
                  className="w-3.5 h-3.5 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <span className="font-medium">9.0</span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-gray-300">2023 | 1h 55m</span>
              </div>
            </div>

            <p className="text-xs text-gray-300 w-full md:w-5/6 lg:w-3/4 mb-2 line-clamp-3">
              Menemukan dirinya berada di era baru, dan mendekati masa pensiun,
              Indy bergulat dengan dunia yang tampaknya sudah melampaui
              batasnya. Namun saat tentakel kejahatan yang sangat familiar
              kembali dalam wujud rival lama, Indy harus mengenakan topinya dan
              mengambil cambuknya sekali lagi untuk memastikan artefak kuno dan
              kuat tidak jatuh ke tangan yang salah.
            </p>

            <div className="text-xs text-gray-300">
              <span className="text-gray-400">Dibintangi:</span> Harrison Ford,
              Phoebe Waller-Bridge, Mads Mikkelsen
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
