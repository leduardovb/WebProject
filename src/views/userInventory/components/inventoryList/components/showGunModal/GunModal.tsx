import { GunDTO } from "../../../../../../dataTransferObject/DTOs";
import {
  Container,
  GunCircle,
  GunImage,
  Line,
  Modal,
  ModalTitle,
} from "./GunModalBase";

type Props = {
  gun: GunDTO;
  closeModal: () => void;
};

function GunModal(props: Props) {
  const { gun, closeModal } = props;
  return (
    <>
      <Container onClick={() => closeModal()} />
      <Modal>
        <ModalTitle>{gun.description}</ModalTitle>
        <Line color={gun.gunRarity.color} />
        <GunCircle></GunCircle>
        <GunImage src={gun.gunImage} />
      </Modal>
    </>
  );
}

export default GunModal;
