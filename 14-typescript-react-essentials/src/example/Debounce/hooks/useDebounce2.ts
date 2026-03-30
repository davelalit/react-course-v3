import {useState, useEffect} from 'react';

const useDebounce2 = (value: string, delay: number) => {
    const [debounceValue, setDebouncedValue] = useState<string>('');

    useEffect(() => {
        const handler = setTimeout(() => {
            console.log('useDebounce2 value = ', value);
            setDebouncedValue(value);
        }, delay);

        return () =>{
            clearTimeout(handler);
        };
        
    }, [value, delay]);

    return debounceValue;

};

export default useDebounce2;