"use client";
// import { RootState } from "@/redux/rootReducer";
// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment } from "@/redux/slice/counterSlice";
import User from "./components/User";

export default function Home() {
  // const counter = useSelector((state: RootState) => state.counter);
  // const dispatch = useDispatch();

  // const handlerIncrement = () => {
  //   dispatch(increment());
  // };
  // const handlerDecrement = () => {
  //   dispatch(decrement());
  // };
  return (
    <div className='container'>
      {/* <h3>Redux</h3>
      <p>{counter}</p>
      <button
        className='bg-white text-black px-4 py-1 cursor-pointer'
        onClick={handlerIncrement}
      >
        +
      </button>
      <button
        className='bg-white text-black px-4 py-1 cursor-pointer'
        onClick={handlerDecrement}
      >
        -
      </button> */}
      <User />
    </div>
  );
}
