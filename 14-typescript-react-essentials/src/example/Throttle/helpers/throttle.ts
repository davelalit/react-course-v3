export const throttle = (fn: (...args: any[]) => void, wait: number): (...args: any[]) => void => {
  let timerId: NodeJS.Timeout | undefined;
  let inThrottle: boolean = false;
  let lastTime: number;

  return (...args: any[]): void => {
    if (!inThrottle) {
      lastTime = Date.now();
      inThrottle = true;
      fn(...args);
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          fn(...args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};