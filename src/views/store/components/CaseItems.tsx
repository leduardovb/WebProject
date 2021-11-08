import { CaseDTO, GunDTO } from "../../../dataTransferObject/DTOs";
import GunCard from "../../userInventory/components/inventoryList/components/gunCard/GunCard";
import {
  List,
  ListItem,
  CaseContainer,
  CaseImage,
  CaseTitle,
  CaseValueDescription,
  Container,
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
        <CaseImage draggable={false} src={caseDTO?.caseImage} />
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
      </CaseContainer>
      <List>
        {caseDTO?.caseGuns.map((value: GunDTO) => {
          return (
            <ListItem>
              <GunCard
                gunRarity={value.gunRarity.color}
                gunImage={value.gunImage}
                gunName={value.description}
                gunValue={value.gunValue}
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
