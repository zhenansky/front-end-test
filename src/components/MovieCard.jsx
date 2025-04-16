const MovieCard = ({ title, year, hour, imageUrl, link }) => {
  return (
    <div className="max-w-44">
      <a href={link}>
        <img className=" w-64 h-4/5 object-cover" src={imageUrl} alt={title} />
      </a>
      <div className="flex flex-col gap-1">
        <a href={link}>
          <h5 className="mt-1 text-xl font-bold tracking-tight text-white">
            {title || "Judul Film"}
          </h5>
        </a>
        <p className="mb-3 text-xs font-normal text-gray-400 dark:text-gray-400">
          {year} | {hour}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
