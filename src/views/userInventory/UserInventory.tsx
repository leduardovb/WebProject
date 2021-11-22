import ProfileDescription from "./components/inventoryHeader/components/userProfile/ProfileDescription";
import InventoryHeader from "./components/inventoryHeader/InventoryHeader";
import InventoryList from "./components/inventoryList/InventoryList";
import InventoryTabs from "./components/inventoryTabs/InventoryTabs";
import { Container } from "./UserInventoryBase";

function UserInventory() {
	return (
		<Container>
			<ProfileDescription />
			<InventoryHeader />
			<InventoryTabs />
			<InventoryList />
		</Container>
	);
}

export default UserInventory;
