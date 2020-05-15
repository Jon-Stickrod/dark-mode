import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = (initialValue, key) =>{
    const [darkMode, setDarkMode] =useLocalStorage(initialValue, key);
    useEffect(() => {
        if(darkMode){
            document.body.classList.add('dark-mode')
        }else{
            document.body.classList.remove('dark-mode')
        }
    }, [darkMode]);
    return[darkMode, setDarkMode];
}
export default useDarkMode;