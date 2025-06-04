import Icon from "@/src/common/icon/Icon";
import Menu from "./Menu";
import Notifications from "./Notifications";
import { fetchDashData } from "@/api/fetchDashData";

const UserActions = async () => {
  const { userData, notifications } = await fetchDashData();
  return (
    <div className="f j-c gap-m">
      <Notifications />
      <Menu />
    </div>
  );
};

export default UserActions;
