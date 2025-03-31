import Button from "../button/Button";

const FormActionBar = ({ title, isLoading }: { title: string; isLoading: boolean }) => {
  return (
    <div
      className="flex align-center justify-between w-100"
      style={{ paddingTop: "var(--2xl)", position: "absolute", bottom: 0 }}
    >
      <Button title={title} type="submit" isLoading={isLoading} bStyle="primary" wide />
    </div>
  );
};

export default FormActionBar;
