'use client'
import { useState } from 'react';
import './ColumnBarGraph.css'; // Add custom styles
import getLineCoords from './getArchMidpoint';

type PieChartProps = {
    data: number[],
    colors: string[],
    labels: string[]
}

const CENTER = { x: 0, y: 0 };
const R = 1;

const PieChart = ({ data, colors, labels }: PieChartProps) => {
    const [hoverIndex, setHoverIndex] = useState<number | null>(0); // State to track the hovered slice
    const total = data.reduce((sum, value) => sum + value, 0); // Sum of all values
    let cumulativePercentage = 0; // Track cumulative percentage for each slice

    const getCoordinatesForPercent = (percent: number) => {
        const x = Math.cos(2 * Math.PI * percent);
        let y = Math.sin(2 * Math.PI * percent);

        return [x, y];
    };

    return (
        <svg width="300" height="300" viewBox="-1 -1 2 2" className="shadow-path" style={{ width: "100%", height: "auto", overflow: "visible" }}>
            {data.map((value, index) => {
                const percentage = value / total; // Calculate percentage for current slice
                const [startX, startY] = getCoordinatesForPercent(cumulativePercentage); // Start with slight offset

                cumulativePercentage += percentage; // Update cumulative percentage
                const [endX, endY] = getCoordinatesForPercent(cumulativePercentage); // End with slight offset

                const largeArcFlag = percentage > 0.5 ? 1 : 0; // Flag for large arc

                // Hover effect calculations
                const isHovered = hoverIndex === index;
                const hoverTranslate = isHovered ? 0.1 : 0; // Distance to translate on hover
                // const [hoverX, hoverY] = getCoordinatesForPercent(cumulativePercentage - percentage / 2); // Get middle of the slice

                //  For label positioning and line drawing
                const [labelX, labelY] = getCoordinatesForPercent(cumulativePercentage - percentage / 2); // Middle of the slice
                let labelPositionX = labelX * 1.2; // Position labels farther out
                let labelPositionY = labelY * 1.2;

                let quadrant = 1;
                let p;
                if (labelX > 0) {
                    if (labelY > 0.6)
                        quadrant = 2;
                    else
                        quadrant = 1;

                    p = cumulativePercentage - (percentage * 0.83) / 2;
                }
                else {
                    if (labelY < -0.6) {
                        quadrant = 4
                        labelPositionY = labelY * 1.4;
                        p = cumulativePercentage - (percentage / 2.5) / 2
                    }
                    else {
                        quadrant = 3
                        p = cumulativePercentage - (percentage * 1.1) / 2
                    }
                    labelPositionX = labelX * 1.52;
                    // p = cumulativePercentage - (percentage * 1.1) / 2
                }
                p = cumulativePercentage - (percentage * 0.83) / 2;
                console.log("q >> ", quadrant)

                const [startXL, startYL, bendXL, bendYL, endXL, endYL] = getLineCoords(quadrant, { lx: labelPositionX, ly: labelPositionY }, p); // Middle of the slice
                // Define the path for the connecting line with a 135-degree bend
                const pathD = `M ${startXL} ${startYL} L ${bendXL} ${bendYL} L ${endXL} ${endYL}`;

                return (
                    <g key={index}>
                        <path
                            d={`M ${startX} ${startY} A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY} L 0 0`} // Arc path
                            fill={colors[index] || 'gray'}
                            // transform={`translate(${hoverX * hoverTranslate}, ${hoverY * hoverTranslate})`} // Move slice outward on hover
                            style={{
                                transition: 'transform 0.3s ease, scale 0.3s ease',
                                cursor: 'pointer',
                                transformOrigin: 'center center',
                            }}

                            onMouseEnter={() => setHoverIndex(index)} // Track which slice is hovered
                            onMouseLeave={() => setHoverIndex(null)} // Reset hover state when mouse leaves
                        />
                        {/* Connecting line */}
                        {/* <g> */}
                        {/* Connecting line using path */}
                        <path
                            fill="none"
                            stroke="#022b3a"
                            strokeWidth={0.016}
                            d={pathD} // Path definition for the connecting line
                        />
                        {/* </g> */}

                        {/* Label */}

                        <text
                            x={labelPositionX}
                            y={labelPositionY}
                            dy="0.35em"
                            fontStyle="normal"
                            fontFamily="Verdana, Helvetica, Arial, sans-serif"
                            fontSize="0.008rem"
                            fontWeight="normal"
                            fill="rgb(84, 95, 105)"
                            letterSpacing="normal"
                            direction="ltr"
                            fontVariant="normal"
                            textDecoration="none"
                            filter="none"
                        // textAnchor={labelX > 0 ? 'start' : 'end'} // Adjust text alignment based on the side of the circle

                        // fontFamily="Arial, sans-serif"
                        >
                            {labels[index]} {/* Label text */}
                        </text>
                    </g>
                );
            })}
        </svg>
    );
};

export default PieChart;
