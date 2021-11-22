import { CaseDTO } from "../../../dataTransferObject/DTOs";
import GunCard from "../../userInventory/components/inventoryList/components/gunCard/GunCard";
import {
  List,
  ListItem,
  CaseContainer,
  CaseImage,
  CaseTitle,
  CaseValueDescription,
  Container,
  CaseButton,
} from "./CaseItemsBase";

type Props = {
  caseDTO?: CaseDTO;
};

function CaseItems(props: Props) {
  const { caseDTO } = props;

  


  return (
    <>
      <Container>
          <CaseContainer>
            <CaseTitle>{caseDTO?.description}</CaseTitle>
            <CaseImage draggable={false} src={caseDTO?.caseImage}/>
            <CaseButton>
            <CaseValueDescription>
              OPEN
              <CaseValueDescription
                marginRight={0.3}
                marginLeft={1}
                color="#2abd69"
              >
                $
              </CaseValueDescription>
              {caseDTO?.caseValue}
            </CaseValueDescription>
            </CaseButton>
          </CaseContainer>
          <List>
            {caseDTO?.caseGuns.map((value) => {
              return (
                <ListItem >
                  <GunCard
                    gunRarity={value.gunRarity.color}
                    gunImage={value.gunImage}
                    gunName={value.description}
                    gunValue={value.gunValue}
                    gun={value}
                  />
                </ListItem>
              );
            })}
          </List>
      </Container>
    </>
  );
}

export default CaseItems;
