import { useState, useEffect } from "react";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovie() {
        try {
          setIsLoading((foo) => (foo = true));
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=2d902a54&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) {
            throw new Error("Something Went Wrong while fetching movies");
          }

          const data = await res.json();

          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          setError("");
          console.log(data.Search);
        } catch (err) {
          if (err.name !== "AbortError") setError(err.message);

          console.log(err.message);
        } finally {
          setIsLoading((foo) => (foo = false));
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovie();

      return () => {
        console.log("cleanup");
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
} //good practice is to use named export for custom hooks instead of export default
