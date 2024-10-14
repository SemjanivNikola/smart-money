// import styles from "./page.module.css";

import Table from "@/src/common/table/Table";
import NewAccountCard from "@/src/components/account-card/NewAccountCard";
import ColumnBarGraph from "@/src/components/graph/ColumnBarGraph";
// import PieChart from "@/src/components/graph/PieChart";
import ScreenHeader from "@/src/components/screen-header/ScreenHeader";
// import { PieChart } from "@mui/x-charts/PieChart";

export default function Transactions() {
    const graphProps = {
        x: [10, 20, 30, 40],
        y: [0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
        bars: [28, 5, 63],
        barColor: ["red", "blue", "green"]
    }

    const data = [51, 50]; // Example data values
    const colors = ['#4682b4', '#32cd32']; // Colors for each slice
    const labels = ['Banana', 'Cherry']; // Labels for each slice




    const data1 = [
        { label: 'Group A', value: 400 },
        { label: 'Group B', value: 300 },
        { label: 'Group C', value: 300 },
        { label: 'Group D', value: 200 },
    ];
    const data2 = [
        { label: 'A1', value: 100 },
        { label: 'A2', value: 300 },
        { label: 'B1', value: 100 },
        { label: 'B2', value: 80 },
        { label: 'B3', value: 40 },
        { label: 'B4', value: 30 },
        { label: 'B5', value: 50 },
        { label: 'C1', value: 100 },
        { label: 'C2', value: 200 },
        { label: 'D1', value: 150 },
        { label: 'D2', value: 50 },
    ];

    return (
        <div className="screen">
            <ScreenHeader title="Transactions" />
            <div className="f row gap-m">
                Transactions
            </div>
            <Table />
            {/* <div className="py-m" style={{ height: 202 }}>
                <NewAccountCard />
            </div>
            <div className="py-m">
                <ColumnBarGraph x={graphProps.x} y={graphProps.y} bars={graphProps.bars} barColor={graphProps.barColor} />
            </div> */}

            <div className="py-xl px-xl">
                <div className="py-xl px-xl" style={{ width: '300px', height: '300px' }}>
                    {/* <PieChart data={data} colors={colors} labels={labels} /> */}
                </div>
            </div>
        </div>
    );
}
