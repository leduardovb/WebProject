import { useState } from "react";
import { GunDTO } from "../../dataTransferObject/DTOs";
import InventoryHeader from "./components/inventoryHeader/InventoryHeader";
import GunModal from "./components/inventoryList/components/showGunModal/GunModal";
import InventoryList from "./components/inventoryList/InventoryList";
import InventoryTabs from "./components/inventoryTabs/InventoryTabs";
import { Container } from "./UserInventoryBase";

function UserInventory() {
  const [selectedGun, setSelectedGun] = useState<GunDTO>();

  function closeModal() {
    setSelectedGun(undefined);
  }

  return (
    <>
      <Container>
        <InventoryHeader />
        <InventoryTabs />
        <InventoryList setSelectedGun={setSelectedGun} />
      </Container>
      {selectedGun ? (
        <GunModal gun={selectedGun} closeModal={closeModal} />
      ) : (
        <></>
      )}
    </>
  );
}

export default UserInventory;
