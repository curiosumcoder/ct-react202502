import { ReactElement } from "react";

function Container({colA,colB,colC}:{colA:ReactElement,colB:ReactElement,colC:ReactElement}) {
  return (
    <>
      <div className="container">
        <div className="row align-items-start">
          <div className="col">{colA}</div>
          <div className="col">{colB}</div>
          <div className="col">{colC}</div>
        </div>
      </div>
    </>
  );
}

export default Container;
