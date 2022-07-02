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

function ArchiveCard({ img,focused }) {
  return (
    <Container focused={focused}>
      <CardThumbnail img={img} />
      <CardTitle>حجت الاسلام و المسلمین</CardTitle>
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
