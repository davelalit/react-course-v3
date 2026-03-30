import { searchMealsFetch } from "../api/mealApi";
import React, { useEffect, useMemo, useState } from "react";
import useDebounce2 from "../hooks/useDebounce2";

const search2 = () => {
    const [query, setQuery] = useState<string>('');
    const [meals, setMeals] = useState<any[]>([]);

    const debounceTerm = useDebounce2(query, 500);

    useEffect(() => {
        const searchMeal = async () => {
           if(debounceTerm) {
               console.log("got term to search = ", debounceTerm)
               setMeals(await searchMealsFetch(debounceTerm));
           }
        };
        searchMeal();
    }, [debounceTerm]);

    const onSearchInputChange = (e) =>{
        const q = e.target.value;
        setQuery(q);
    };

    return (
        <>
             <form>
                <label>Search meals</label>
                <input type='text' onChange={onSearchInputChange} />
             </form>
             <ul>
                {
                    meals?.map((meal) => {
                    return <li key={meal.idMeal}>{meal.strMeal}</li>;
                    }
                )}
             </ul>
        </>
    );

};

export default search2;