import React from "react";
import "./style.css";

import { DummyComponentProps } from "./Dummy.types";

const DummyComponent: React.FC<DummyComponentProps> = ({ name, age }) => {
  return (
    <div>
      <h1 className="font-size-20">I am {name}</h1>
      <h2 className="font-size-14">I am {age} years Old</h2>
    </div>
  );
};

export default DummyComponent;
