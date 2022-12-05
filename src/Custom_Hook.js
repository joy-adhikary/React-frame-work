

import { useState, useEffect } from 'react';

/*
sytax of custom hook 
const use(hookName) = (perameter)=>{
 
   some js or ts code ....
  return { jei koita useState use kora hoise sob gular initial_value gula ei tai pass kore dite hobe  }
  amra eita array or obj hisabe pass korty pri ,, jodi array hisabe pass kori tahole main page theke const [custom hook er maje je sokol state assign kora hoise sob gular initial_value gula]=useCustomHook(permeter)
  or jodi boj pass kori tahole const { custom hook er maje je sokol state assign kora hoise sob gular initial_value gula  }=useCustomHook(perameter )
}

export default useCustomHook ;

hook a sob somoi use diye suru korty hoi nam 


custom hook a basically hoi ki je akta kaj jodi bar bar kora lage tahole oitake akta function type banai neya hoi 
then oitake just call deya hoi . 

hook er last a je je value gula useState a initial vlaue cilo oi gula export kora hoi as a array[ ] or obj { }

custom hook ke ei vabe assign kora hoi home page a 
const { export type } = useState(perameter)

normal hook ke ei vabe assign kora hoi home page a 
const [initial_value , setValue ]  = useState(initital_value)

*/


// ei custom hook gula sob somoi fetch request send koty thake sei jonno sob theke importent bak hocche thik time mto abrot kore deya 
// https://www.youtube.com/watch?v=aKOQtGLT-Yk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=24



const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // https://www.youtube.com/watch?v=aKOQtGLT-Yk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=24
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        }
      })
    }, 1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [url])

  return { data, isPending, error };  // je sokol state use korsi sei gular value gula pass kore dicche as a obj , array hisabau deya jai kintu tkn order maintain korty hobe like a indx er mot 
  
}
 
export default useFetch;