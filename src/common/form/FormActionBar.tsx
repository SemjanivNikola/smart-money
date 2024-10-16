import { useFormContext } from "react-hook-form";
import Button from "../button/Button";

const FormActionBar = ({ title, children }: { title: string; children?: React.ReactElement }) => {
  const {
    formState: { isLoading },
  } = useFormContext();

  return (
    <div className="flex align-center justify-between" style={{ paddingTop: "var(--2xl)" }}>
      {/* <Button.Submit title={title} status={isLoading} /> */}
      {children}
    </div>
  );
};

export default FormActionBar;
