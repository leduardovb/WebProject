import { useState } from "react";
import { CaseDTO } from "../../dataTransferObject/DTOs";
import Header from "../../generics/header/Header";
import { SeedCases } from "../../generics/utils/SeedCases";
import Store from "../store/Store";
import { Container } from "./HomeBase";

export default function Home() {
    const [cases, setCases] = useState<CaseDTO[]>(SeedCases())
    const [open, setOpen] = useState<boolean>()

    function clickOpen(open: boolean){
        setOpen(open)
    }
    return (
        <Container>
            <Header clickOpen={clickOpen}/>
            {open ? <Store cases={cases}/>: null}
        </Container>
    )
}