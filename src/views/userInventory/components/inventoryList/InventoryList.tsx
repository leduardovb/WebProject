import React from "react";
import { GunDTO } from "../../../../dataTransferObject/DTOs";
import { GunArray01 } from "../../../../generics/utils/Guns";
import { ListItem } from "../../../caseList/CaseListBase";
import GunCard from "./components/gunCard/GunCard";
import { List } from "./InventoryListBase";

type Props = {
  setSelectedGun: React.Dispatch<React.SetStateAction<GunDTO | undefined>>;
};

function InventoryList(props: Props) {
  const { setSelectedGun } = props;
  const guns: GunDTO[] = GunArray01;

  return (
    <List>
      {guns.map((value: GunDTO) => {
        return (
          <ListItem>
            <GunCard
              gunRarity={value.gunRarity.color}
              gunImage={value.gunImage}
              gunName={value.description}
              gunValue={value.gunValue}
              gun={value}
              setSelectedGun={setSelectedGun}
            />
          </ListItem>
        );
      })}
    </List>
  );
}

export default InventoryList;
