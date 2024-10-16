import Props from '@/pages/Props';
import React from 'react';

interface user {
    name: string;
    age?: number | string;
}

interface myColor {
  color: string;
  name?: string;
}

const Hello = ({color, ...props}:myColor):React.ReactNode =>{
  return <h1>my color is {color}, {props.name}</h1>
}

const MyPropsSubb = (props:user): React.ReactNode => {
  return (
    <div>
      <p>안녕하세요 {props.name}, {props.age}</p>
      <Hello color="red" />
      <Hello color="green" name="kim" />
    </div>
  );

  type SomeObject = any;
  // ---cut---
  type SomeConstructor = {
    new (s: string): SomeObject;
  };
  function fn(ctor: SomeConstructor) {
    return new ctor("hello");
  }

  interface CallOrConstruct {
    (n?: number): string;
    new (s: string): Date;
  }
};

export default MyPropsSubb;
