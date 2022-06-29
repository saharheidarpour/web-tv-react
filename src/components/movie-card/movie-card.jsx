import { Container } from "./style";
import React from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

function MovieCard({ img, focused }) {
  return <Container img={img} focused={focused}></Container>;
}
export default withFocusable()(MovieCard);
