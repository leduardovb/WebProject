import {
  CaseContainer,
  CaseTitle,
  CaseValueDescription,
  Container,
  ListItem,
  List,
  CaseImage,
} from "./StoreBase";
import { CaseDTO } from "../../dataTransferObject/DTOs";
import { useState } from "react";
import InventoryList from "../userInventory/components/inventoryList/InventoryList";
import CaseItems from "./components/CaseItems";

type Props = {
  cases: CaseDTO[];
};

function Store(props: Props) {
  const { cases } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [caseDTO, setCaseDTO] = useState<CaseDTO>()

  return (
    <Container>
      {open ? <CaseItems caseDTO={caseDTO}/> : <List>
        {cases.map((value: CaseDTO) => {
          return (
            <>
              <ListItem key={value.description}>
                <CaseContainer>
                  <CaseTitle>{value.description}</CaseTitle>
                  <CaseImage
                  draggable={false}
                  src={value.caseImage}
                  onClick={() => {setOpen(!open)
                    setCaseDTO(value)
                  }}
                />
                  <CaseValueDescription>
                    OPEN
                    <CaseValueDescription
                      marginRight={0.3}
                      marginLeft={1}
                      color="#2abd69"
                    >
                      $
                    </CaseValueDescription>
                    {value.caseValue}
                  </CaseValueDescription>
                </CaseContainer>
              </ListItem>
            </>
          );
        })}
      </List>}
      
    </Container>
  );
}

export default Store;
