import { useEffect, useState } from "react";

interface CountryName{
common: string
}

interface Idd {
  root: string;
  suffixes: string;
}


export interface Country{
  name: CountryName;
  idd: Idd;
    flag: string;
    timezones: string[] | null;
};



const useCountries = () => {
    const [countries, setCountry] = useState<Country[]>([]);
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const controller = new AbortController()

        fetch("https://restcountries.com/v3.1/all", {
          signal: controller.signal,
        })
          .then((res) => res.json())
          .then((res) => setCountry(res.data))
          .catch((error) => {
            
            setError(error.message);
          });
    
      return () => {
        controller.abort()
      }
    }, [])

    return {countries, error, loading}
}



export default useCountries











// const useCountries = () => {
//   const [countries, setCountry] = useState<Country[]>([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     axios
//       .get<Country[]>("https://restcountries.com/v3.1/all", {
//         signal: controller.signal,
//       })
//       .then((res) => {
//         setCountry(res.data);
//       })
//       .catch((error) => {
//         if (error instanceof CanceledError) return;
//         setError(error.message);
//       });

//     return () => {
//       controller.abort();
//     };
//   }, []);

//   return { countries, error, loading };
// };

// export default useCountries;
