"use client"
import SimpleInput from "@/src/common/text-input/SimpleInput";
import ScreenHeader from "@/src/components/screen-header/ScreenHeader";
import s from "../virtual-accounts/[id]/transactions-table.module.css"
import Button from "@/src/common/button/Button";
import DropdownArea from "@/src/common/dropdown-area/DropdownArea";

export default function NewTransaction() {
    const formData = {
        total: ""
    }
    return (
        <div className="screen">
            <ScreenHeader title="Insert new shopping transaction" />
            {/* encType="multipart/form-data" */}
            <form action="" className="py-m">
                <div className="f row gap-m mb-m">
                    <SimpleInput name="total" type="text" value={formData.total} label="Total invoice amount" onChange={() => { }} icon="plus" />
                    <SimpleInput name="date" type="text" value={formData.total} label="Date" onChange={() => { }} icon="plus" />
                    <SimpleInput name="shop" type="text" value={formData.total} label="Shop" onChange={() => { }} icon="plus" />
                    <SimpleInput name="account" type="text" value={formData.total} label="Account" onChange={() => { }} icon="plus" />
                    <Button onClick={() => { }} />
                </div>
                <DropdownArea />
            </form>

            {/* TODO: At the moment this whole item table is optional */}
            <table className={s.table}>
                <thead>
                    <tr className={s.tttr}><th className={s.ttth}>Num</th>
                        <th className={s.ttth}>Name</th>
                        <th className={s.ttth}>Quantity</th>
                        <th className={s.ttth}>Price for peace</th>
                        <th className={s.ttth}>Discount/Discount price</th>
                        <th className={s.ttth}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="px-m">
                        <th>1.</th>
                        <th>Zubna pasta</th>
                        <th>2</th>
                        <th>1,13</th>
                        <th><span>5%</span>
                            <span>0,87</span></th>
                        <th>1,74</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}