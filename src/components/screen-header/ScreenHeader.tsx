import UserActions from "./UserActions";

const ScreenHeader = ({ title }: { title: string }) => {
  return (
    <div className="w-100 f j-sb px-lg">
      <h1>{title}</h1>
      <UserActions />
    </div>
  );
};

export default ScreenHeader;
