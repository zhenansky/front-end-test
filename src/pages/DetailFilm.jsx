import Banner from "../components/Banner";
import videos from "../assets/videos.png";
import React, { useState, useRef } from "react";
import MovieCard from "../components/MovieCard.jsx";
import ButtonSel from "../components/ButtonSel.jsx";

const DetailFilm = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Jumlah halaman slide

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

  const castMembers = [
    {
      name: "Milly Bobby Brown",
      role: "Jane Hopper",
      image: "https://via.placeholder.com/150x180", // Ganti dengan URL gambar asli
    },
    {
      name: "Milly Bobby Brown",
      role: "Jane Hopper",
      image: "https://via.placeholder.com/150x180",
    },
    {
      name: "Milly Bobby Brown",
      role: "Jane Hopper",
      image: "https://via.placeholder.com/150x180",
    },
    {
      name: "Milly Bobby Brown",
      role: "Jane Hopper",
      image: "https://via.placeholder.com/150x180",
    },
    {
      name: "Milly Bobby Brown",
      role: "Jane Hopper",
      image: "https://via.placeholder.com/150x180",
    },
    {
      name: "Milly Bobby Brown",
      role: "Jane Hopper",
      image: "https://via.placeholder.com/150x180",
    },
    // Tambahkan lebih banyak pemain jika diperlukan
  ];

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Banner />
      <div className="plot px-10 my-10 gap-7 flex flex-col text-white">
        <h3 className="text-3xl font-bold ">Plot</h3>
        <p className="text-sm">
          Menemukan dirinya berada di era baru, dan mendekati masa pensiun, Indy
          bergulat dengan dunia yang tampaknya sudah melampaui batasnya. Namun
          saat tentakel kejahatan yang sangat familiar kembali dalam wujud rival
          lamanya, Indy harus mengenakan topinya dan mengambil cambuknya sekali
          lagi untuk memastikan artefak kuno dan kuat tidak jatuh ke tangan yang
          salah.
        </p>
      </div>
      <div className="videos my-10 px-10 text-white">
        <h3 className="text-3xl font-bold">Videos</h3>
        <div className="mt-4 w-full h-[600px]">
          <img className="w-full h-full" src={videos} alt="" />
        </div>
      </div>
      <div className="text-white p-10 flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Dibintangi Oleh</h2>
        <div className="flex space-x-2">
          <button
            onClick={goToPrevSlide}
            className="bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded-sm"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            onClick={goToNextSlide}
            className="bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded-sm"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="px-10 overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="w-full flex-shrink-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {castMembers
                .slice(slideIndex * 6, (slideIndex + 1) * 6)
                .map((cast, index) => (
                  <div key={index} className="flex flex-col bg-[#0F172A]">
                    <div className="mb-2 overflow-hidden rounded-sm bg-gray-800">
                      <img
                        src={cast.image}
                        alt={cast.name}
                        className="w-full h-40 object-cover object-top"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-medium text-white">
                        {cast.name}
                      </h3>
                      <p className="text-xs text-gray-400">{cast.role}</p>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      <div className=" flex justify-center mt-4 space-x-1.5">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentSlide === index ? "bg-red-600" : "bg-gray-600"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      <div className="Film Serupa px-2 md:px-10 mb-10 md:mb-20">
        <div className="title flex flex-row justify-between text-white items-center">
          <h3 className="text-xl md:text-2xl font-bold">Film Serupa</h3>
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
    </>
  );
};

export default DetailFilm;
