export const debounce = (fn: (...args: any[]) => void, delay: number): (...args: any[]) => void => {
  let timerId: NodeJS.Timeout | undefined;

  return (...args: any[]): void => {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => fn(...args), delay);
  };
};