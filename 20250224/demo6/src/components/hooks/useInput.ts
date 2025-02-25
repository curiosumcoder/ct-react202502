import {useState, SyntheticEvent} from 'react'

export default function useInput<T>(initialValue:T) {
  const [value, setValue] = useState<T>(initialValue);
  
  return [
    {
      value,
      onChange: (e:SyntheticEvent) => setValue((<HTMLInputElement>e.target).value as T),
    },
    () => setValue(initialValue),
  ];
}

export interface IInput<T>
{
    value:T;
    onChange:(e:SyntheticEvent)=>void
}
