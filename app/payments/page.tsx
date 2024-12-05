import SearchBar from "@/src/common/search-bar/SearchBar";
import ScreenHeader from "@/src/components/screen-header/ScreenHeader";
import PaymentList from "./PaymentList";
import CategoryList from "./CategoryList";

export default function Payments() {
  return (
    <div className="main w-100 f col a-s gap-lg">
      <ScreenHeader title="Payments" />
      <div className="py-lg as-s">
        <SearchBar />
        <CategoryList />
        <PaymentList />
      </div>
    </div>
  );
}
