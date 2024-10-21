import Icon from "@/src/common/icon/Icon";
import Menu from "./Menu";
import Notifications from "./Notifications";

const UserActions = () => {
  return (
    <div className="f j-c gap-m">
      <Notifications />
      <Menu />
    </div>
  );
};

export default UserActions;
