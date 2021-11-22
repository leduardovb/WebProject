import { GunDTO } from "../../../../../../dataTransferObject/DTOs";
import {
  Container,
  GunCardFooter,
  GunCardHeader,
  GunImage,
  GunName,
  GunSkinName,
  GunValue,
} from "./GunCardBase";

type Props = {
  gunRarity: string;
  gunImage: string;
  gunName: string;
  gunValue: number;
  gun: GunDTO;
  setSelectedGun: React.Dispatch<React.SetStateAction<GunDTO | undefined>>;
};

function GunCard(props: Props) {
  const { gunRarity, gunImage, gunName, gunValue, gun, setSelectedGun } = props;
  return (
    <Container onClick={() => setSelectedGun(gun)} borderColor={gunRarity}>
      <GunCardHeader>
        <GunValue color="#2abd69" fontWeight={700} marginRight={0}>
          $
        </GunValue>
        <GunValue>{gunValue},00</GunValue>
      </GunCardHeader>
      <GunImage src={gunImage} />
      <GunCardFooter>
        <GunName>{gunName.slice(0, gunName.lastIndexOf("-") - 1)}</GunName>
        <GunSkinName>{gunName.slice(gunName.lastIndexOf("-") + 1)}</GunSkinName>
      </GunCardFooter>
    </Container>
  );
}

export default GunCard;
