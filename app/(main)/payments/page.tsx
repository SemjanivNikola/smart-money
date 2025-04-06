import PageScreen from "@/src/common/screen/PageScreen";
import SearchBar from "@/src/common/search-bar/SearchBar";
import { Suspense } from "react";
import CategoryList from "../../../src/components/category-actions/CategoryList";
import PaymentList from "../../../src/components/payment-table/PaymentList";
import LoadingState from "./loading";

export default function Payments() {
  return (
    <PageScreen title="Payments">
      <>
        <SearchBar />
        <CategoryList />
        <Suspense fallback={<LoadingState />}>
          <PaymentList />
        </Suspense>
      </>
    </PageScreen>
  );
}
