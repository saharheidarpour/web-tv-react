import { Container } from "./style";
import React from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

function MovieCard({ data, focused }) {
  return (
    <Container
      img={"https://gateway.telewebion.com" + data.poster}
      focused={focused}></Container>
  );
}
export default withFocusable()(MovieCard);
