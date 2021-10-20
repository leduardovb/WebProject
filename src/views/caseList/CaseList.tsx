import { CaseDTO } from "../../dataTransferObject/DTOs"
import { CaseContainer, CaseImage, CaseTitle, CaseValueDescription, Container, List, ListItem } from "./CaseListBase"

type Props = {
    cases: CaseDTO[]
}

function CaseList(props: Props) {
    const { cases } = props
    
    return (
        <Container>
            <List>
                {cases.map((value: CaseDTO) => {
                    return (
                        <ListItem key={value.description}>
                            <CaseContainer>
                                <CaseTitle>{value.description}</CaseTitle>
                                <CaseImage draggable={false} src={value.caseImage}/>
                                <CaseValueDescription>
                                    OPEN
                                    <CaseValueDescription marginRight={0.3} marginLeft={1} color="#2abd69">
                                        $
                                    </CaseValueDescription>
                                    {value.caseValue}
                                </CaseValueDescription>
                            </CaseContainer>
                        </ListItem>
                    )
                })}
            </List>
        </Container>
    )
}

export default CaseList
