import { useState } from "react";
import { CaseDTO } from "../../dataTransferObject/DTOs";
import Header from "../../generics/header/Header";
import { SeedCases } from "../../generics/utils/SeedCases";
import Store from "../store/Store";
import { Container } from "./HomeBase";

export default function Home() {
    const [cases, setCases] = useState<CaseDTO[]>(SeedCases())
    const [t, setT] = useState<boolean>()

    function tt(ttt: boolean){
        setT(ttt)
    }
    return (
        <Container>
            <Header aa={tt}/>
            {t ? <Store cases={cases}/>: null}
        </Container>
    )
}