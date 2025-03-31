import React from "react";

const ChildComponent = ({ button, handleClick }) => {
  console.log("child-component get re-rendered");
  return (
    <div>
      <button onClick={handleClick}>{button}</button>
    </div>
  );
};

// export default ChildComponent;

export default React.memo(ChildComponent);
//if we wrap component in react.memo then the component will
//re-render only when the props value changed

//react.memo wont be able to re-render if we pass function
