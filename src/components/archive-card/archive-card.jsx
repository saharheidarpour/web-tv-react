import {
  CardDescription,
  CardThumbnail,
  CardTitle,
  Container,
  Row,
  DetailItem,
} from "./style";
import React from "react";
import TimeIcon from "@assets/images/time-icon.svg";
import ViewIcon from "@assets/images/view-icon.svg";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

function ArchiveCard({ data,focused }) {
  console.log(data  )
  return (
    <Container focused={focused}>
      <CardThumbnail img={data.poster_ofoghi_small} />
      <CardTitle>{data.title}</CardTitle>
      <CardDescription>سخنرانی شبکه سه</CardDescription>
      <Row>
        <TimeIcon />
        <DetailItem>22 دقیقه</DetailItem>
        <ViewIcon />
        <DetailItem> 102308 تماشا</DetailItem>
      </Row>
    </Container>
  );
}
export default withFocusable()(ArchiveCard);
