/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect } from "react";
import { MonedaContext, monedas } from "../MonedaContext";

function CurrencyCurrent() {
    const {moneda, setMoneda} = useContext<any>(MonedaContext);
    
    useEffect(() => {
      console.log("CurrencyCurrent: ", moneda, new Date());
    });

    return (
      <>
            <div className="mb-3"><strong>{moneda.signo}</strong> {moneda.nombre} </div>            
            <button className="btn btn-primary" onClick={()=> setMoneda(monedas.dolar)}>Set Dolar</button>
      </>
    );
  }

export default CurrencyCurrent