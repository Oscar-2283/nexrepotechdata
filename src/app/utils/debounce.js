export function debounce(func, delay = 1000) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    
    timeout = setTimeout(() =>{
      func(...args)
    } , delay)
  };
}