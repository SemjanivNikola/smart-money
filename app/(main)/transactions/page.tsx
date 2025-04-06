import PageScreen from "@/src/common/screen/PageScreen";
import TransactionList from "./TransactionList";
import LoadingState from "../payments/loading";
import { Suspense } from "react";

export default function Transactions() {
  return (
    <PageScreen title="Transactions">
      <Suspense fallback={<LoadingState />}>
        <TransactionList />
      </Suspense>
    </PageScreen>
  );
}
