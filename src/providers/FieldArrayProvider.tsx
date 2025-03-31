import { createContext, useContext } from "react";
import { ArrayPath, Control, FieldArrayWithId, UseFieldArrayAppend, useFieldArray as useRHF } from "react-hook-form";

interface InvoiceContextType<T extends Record<string, any>, K extends ArrayPath<T>> {
  fields: FieldArrayWithId<T, K, "id">[];
  append: UseFieldArrayAppend<T, K>;
}

const InvoiceContext = createContext<InvoiceContextType<any, any> | null>(null);

export const useFieldArray = <T extends Record<string, any>>() => {
  const context = useContext(InvoiceContext) as InvoiceContextType<T, any> | null;
  if (!context) throw new Error("useFieldArray must be used within FieldArrayProvider");
  return context;
};

export const FieldArrayProvider = <T extends Record<string, any>, K extends ArrayPath<T>>({
  children,
  control,
  name,
}: {
  children: React.ReactNode;
  control: Control<T>;
  name: K;
}) => {
  const { fields, append } = useRHF<T, K>({ control, name });

  return <InvoiceContext.Provider value={{ fields, append }}>{children}</InvoiceContext.Provider>;
};
