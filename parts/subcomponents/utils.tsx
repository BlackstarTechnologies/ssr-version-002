"use client";

import { useEffect, useState } from "react";


// export const useClientSide = (func: T) => {
//   const [value, setValue] = useState(null);

//   useEffect(() => {
//     setValue(func());
//   }, [func]);
//   return value;
// };


export function useClientSide <ClientSideData> (func: ()=>ClientSideData):ClientSideData {
  const [value, setValue] = useState<ClientSideData>(null);

  useEffect(() => {
    setValue(func());
  }, [func]);
  return value;
};


