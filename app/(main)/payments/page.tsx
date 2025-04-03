import PageScreen from "@/src/common/screen/PageScreen";
import SearchBar from "@/src/common/search-bar/SearchBar";
import CategoryList from "../../../src/components/category-actions/CategoryList";
import PaymentList from "../../../src/components/payment-table/PaymentList";

export default function Payments() {
  return (
    <PageScreen title="Payments">
      <>
        <SearchBar />
        <CategoryList />
        <PaymentList />
      </>
    </PageScreen>
  );
}
