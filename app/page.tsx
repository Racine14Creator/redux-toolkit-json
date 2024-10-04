"use client";
import { redirect } from "next/navigation";
// import { RootState } from "@/redux/rootReducer";
// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment } from "@/redux/slice/counterSlice";

import { useSession } from "next-auth/react";

export default function Home() {
  // const counter = useSelector((state: RootState) => state.counter);
  // const dispatch = useDispatch();

  // const handlerIncrement = () => {
  //   dispatch(increment());
  // };
  // const handlerDecrement = () => {
  //   dispatch(decrement());
  // };

  const { data: session } = useSession();

  if (!session) {
    return redirect("/login");
  } else {
    redirect("/home");
  }
}
