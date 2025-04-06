import { fetchTransactions } from "@/api/transactions/fetchTransactios";
import PageScreen from "@/src/common/screen/PageScreen";
import SearchBar from "@/src/common/search-bar/SearchBar";
import { Suspense } from "react";
import LoadingState from "../payments/loading";
import TransactionList from "./TransactionList";

export default function Transactions() {
  return (
    <PageScreen title="Transactions">
      <Suspense fallback={<LoadingState />}>
        <SearchBar fetchAPI={fetchTransactions} />
        <TransactionList />
      </Suspense>
    </PageScreen>
  );
}
