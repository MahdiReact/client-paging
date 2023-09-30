import { useState, useEffect } from "react";
import {chunk} from 'lodash';
import { Programmer } from "./model";



const usePaginatedFetch: (url:string, pageSize:number) => [boolean,Programmer[][]] = (url, pageSize) => {

   const [data,setData] = useState<Programmer[][]>([]);
   const [loading, setLoading] = useState<boolean>(true);

   const getData: (url: string) => void  = async (url) => {
      const response = await fetch(url);
      const result = await response.json();
      const paginatedData = chunk(result, pageSize);
      setData(paginatedData);
      setLoading(false);
   }

   useEffect(() => {
      getData(url);
   } , [])


   return [loading, data];


}

export default usePaginatedFetch;