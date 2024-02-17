import useGenres from "../hooks/useGenres";

// Our component should know nothing about HTTP request
// So we put all the things in hooks
const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
