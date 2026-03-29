import { searchMeals } from "../api/mealApi";
import React, { useMemo, useState } from "react";
import { debounce } from "../helpers/debounce";

const Search = () => {
  const [query, setQuery] = useState<string>("");
  const [meals, setMeals] = useState<any[]>([]);

  const initSearchApiRequest = useMemo(() => {
    return debounce(async (q: string): Promise<void> => {
      setMeals(await searchMeals(q));
    }, 500);
  }, []);

  const onChangeQuery = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const q = e.target.value;
    setQuery(q);
    initSearchApiRequest(q);
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
