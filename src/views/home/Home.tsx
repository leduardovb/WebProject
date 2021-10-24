import { useState } from "react";
import { CaseDTO } from "../../dataTransferObject/DTOs";
import Header from "../../generics/header/Header";
import { SeedCases } from "../../generics/utils/SeedCases";
import CaseList from "../caseList/CaseList";
import UserInventory from "../userInventory/UserInventory";
import { Container } from "./HomeBase";

export default function Home() {
  const [cases, setCases] = useState<CaseDTO[]>(SeedCases());

  return (
    <Container>
      <Header />
      <UserInventory />
    </Container>
  );
}
