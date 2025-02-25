/* eslint-disable @typescript-eslint/no-explicit-any */
import {useEffect} from 'react'
import useProductSearch from "../hooks/useProductSearch";

const withProductSearch = (WrappedComponent: any, filter:string) => {
  return (...props: any) => {
    const [{ data }, doSearch] = useProductSearch();
    //console.log(props);

    useEffect(()=>{
        doSearch(filter)
    },[doSearch])

    return (
      <>
        <WrappedComponent {...props} data={data}/>
      </>
    );
  };
};

export default withProductSearch;
