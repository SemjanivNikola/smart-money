import './ColumnBarGraph.css'; // Add custom styles

type ColumnBarGraphProps = {
    x: number[],
    y: number[],
    bars: number[],
    barColor: string[]
}

const ColumnBarGraph = ({ x, y, bars, barColor }: ColumnBarGraphProps) => {
    // Determine the max bar height for scaling
    const maxBarValue = Math.max(...bars);

    return (
        <div className="graph-container card px-m py-m">
            <div className="bars-container">
                {bars.map((barValue, index) => (
                    <div key={index} className="bar-wrapper">
                        <div
                            className="bar"
                            style={{
                                height: `${(barValue / maxBarValue) * 100}%`, // Scale bar heights
                                backgroundColor: barColor[index] || 'gray',
                                width: `${100 / bars.length}%`, // Make sure bars divide the space evenly
                            }}
                        />
                        {/* <div className="x-label">{x[index]}</div> */}
                    </div>
                ))}
            </div>
            <div className="y-axis-labels">
                {y.reverse().map((yValue, index) => (
                    <div key={index} className="y-label">
                        {yValue}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColumnBarGraph;
