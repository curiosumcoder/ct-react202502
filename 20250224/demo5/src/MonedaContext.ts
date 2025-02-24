import { createContext } from "react";

export interface Moneda {
    id: number;
    nombre: string;
    signo: string;
  }

export const monedas : { [key: string]: Moneda }= {
  colon: {
    id: 1,
    nombre: "Colón",
    signo: "₡",
  },
  dolar: {
    id: 2,
    nombre: "Dólar",
    signo: "$",
  },
};

export const MonedaContext = createContext({});