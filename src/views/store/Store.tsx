import {
  Box,
  CaseContainer,
  CaseTitle,
  CaseValueDescription,
  Container,
  ListItemCase,
  ListCase,
} from "./StoreBase";
import { CaseDTO } from "../../dataTransferObject/DTOs";
import { useState } from "react";

type Props = {
  cases: CaseDTO[];
};

function Store(props: Props) {
  const { cases } = props;
  const [se, setSe] = useState<boolean>(false)
  return (
    <Container>
      {cases.map((value: CaseDTO) => {
        return (
          <>
            <ListCase>
              <ListItemCase>
                <CaseContainer>
                  <CaseTitle>{value.description}</CaseTitle>
                  <Box draggable={false} src={value.caseImage} onClick={() => setSe(!se)} />
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
              </ListItemCase>
            </ListCase>
          </>
        );
      })}
    </Container>
  );
}

export default Store;
