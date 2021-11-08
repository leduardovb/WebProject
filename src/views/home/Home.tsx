import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { CaseDTO } from "../../dataTransferObject/DTOs";
import Header from "../../generics/header/Header";
import { SeedCases } from "../../generics/utils/SeedCases";
import Store from "../store/Store";
import UserInventory from "../userInventory/UserInventory";
import { Container } from "./HomeBase";


export default function Home() {
  const [cases, setCases] = useState<CaseDTO[]>(SeedCases());

  return (
    <Container>
      <Header/>
      <Switch>
        <Route exact path="/" >
          <Store cases={cases} />
        </Route>
        <Route path="/inventory" >
          <UserInventory />
        </Route>
      </Switch>
      
    </Container>
  );
}
