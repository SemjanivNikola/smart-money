"use client";

import Button from "@/src/common/button/Button";
import "./review-payments.css";

const ReviewPayment = () => {
  return (
    <div className="mx-auto" style={{ maxWidth: "40%" }}>
      <h3>Review your transfer</h3>

      <table className="review-table w-100 mb-m py-s">
        <tbody>
          <tr className="section-header">
            <td colSpan={2}>Send details</td>
          </tr>
          <tr className="payment-data">
            <td>Amount</td>
            <td>1 EUR</td>
          </tr>
          <tr className="payment-data">
            <td>Date & Time</td>
            <td>08.12.2024 14:46</td>
          </tr>
          <tr className="section-header">
            <td colSpan={2}>Payment Account</td>
          </tr>
          <tr className="payment-data-double">
            <td colSpan={2}>
              <span className="mb-s">**** **** **** 1234 EUR</span>
              <span style={{ fontSize: "var(--font-s)" }}>Balance after payment: €6,949.00</span>
            </td>
          </tr>
        </tbody>
      </table>

      <Button title="Confirm and Send" type="submit" isLoading={false} bStyle="primary" wide />
      <div className="spacer-xs" />
      <Button title="Save Draft" type="button" isLoading={false} bStyle="secondary" wide onClick={() => {}} />
    </div>
  );
};

export default ReviewPayment;
