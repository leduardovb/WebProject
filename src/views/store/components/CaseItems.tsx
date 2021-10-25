import { GunDTO } from "../../../dataTransferObject/DTOs";
import {
  BoxCard,
  CaseContainer,
  CaseImage,
  CaseTitle,
  Container,
  List,
  ListItem,
} from "./CaseItemsBase";

type Props = {
  cases: GunDTO[];
};
function CaseItems(props: Props) {
  const { cases } = props;

  return (
    <>
      <Container>
        <List>
          {cases.map((value: GunDTO) => {
            return (
              <ListItem key={value.description}>
                
                <CaseContainer>
                <BoxCard color={value.gunRarity.color}/>
                    <CaseTitle>{value.description}</CaseTitle>
                    <CaseImage draggable={false} src={value.gunImage} />
                </CaseContainer>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </>
  );
}

export default CaseItems;
