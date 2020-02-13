import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT_ACTION_TYPE, DECREMENT_ACTION_TYPE } from "../slice/store";

const Page = () => {
  const dispatch = useDispatch();
  const { number } = useSelector(state => state);

  return (
    <div>
      <button onClick={() => dispatch(INCREMENT_ACTION_TYPE())}>
        Increment number
      </button>
      <h1>{number}</h1>
      <button onClick={() => dispatch(DECREMENT_ACTION_TYPE())}>
        Decrement number
      </button>
    </div>
  );
};

export default Page;
