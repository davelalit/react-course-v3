import { searchMeals } from "../api/mealApi";
import React, { useEffect, useMemo, useState } from "react";
import useDebounce2 from "../hooks/useDebounce2";
// import useDebounce from "../hooks/useDebounce";
// import { debounce } from "../helpers/debounce";

const Search = () => {
  const [query, setQuery] = useState<string>("");
  const [meals, setMeals] = useState<any[]>([]);

  // Debounce the searchTerm with a 500ms delay
  const debouncedSearchTerm = useDebounce2(query, 500);
  // Effect to perform the actual search operation (e.g., API call)
  // This runs ONLY when the debouncedSearchTerm changes
  useEffect(() => {
    const fetchMeals = async () => {
      if (debouncedSearchTerm) {
        console.log('Fetching search results for:', debouncedSearchTerm);
        // You would place your API call or data fetching logic here
        setMeals(await searchMeals(debouncedSearchTerm));
      }
    };
    fetchMeals();
  }, [debouncedSearchTerm]); // The dependency is the debounced value

  // const initSearchApiRequest = useMemo(() => {
  //   return debounce(async (q: string): Promise<void> => {
  //     setMeals(await searchMeals(q));
  //   }, 500);
  // }, []);

  const onChangeQuery = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const q = e.target.value;
    setQuery(q);
    // initSearchApiRequest(q);
  };

  return (
    <div>
      <form>
        <label>Search meals</label>
        <input type="text" value={query} onChange={onChangeQuery} />
      </form>
      <ul>
        {meals?.map((meal) => {
          return <li key={meal.idMeal}>{meal.strMeal}</li>;
        })}
      </ul>
    </div>
  );
};

export default Search;
