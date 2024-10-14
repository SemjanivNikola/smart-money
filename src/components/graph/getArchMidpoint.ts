
function getCoordinatesForPercent(percent: number) {
    const x = Math.cos(2 * Math.PI * percent);
    let y = Math.sin(2 * Math.PI * percent);

    return [x, y];
};

export default function getLineCoords(q: number, l: { lx: number, ly: number }, p: number) {
    const [x, y] = getCoordinatesForPercent(p);
    let startX, startY, bendX, bendY, endX, endY;

    // const bendXMultiply = 

    switch (q) {
        case 1:
            startX = x;
            startY = y;
            bendX = startX * 1.12;
            bendY = l.ly + 0.12;
            endX = (l.lx * 0.15) + l.lx
            endY = l.ly + 0.12
            break;
        case 2:
            startX = x;
            startY = y;
            bendX = startX * (1.12);
            bendY = startY * 1.19;
            endX = (l.lx - 0.05)
            endY = l.ly + 0.08
            break;
        case 3:
            startX = x;
            startY = y;
            bendX = startX * 1.1;
            bendY = l.ly + 0.12
            endX = (l.lx * 1.9) - l.lx
            endY = l.ly + 0.12
            break;
        case 4:
            startX = (x * -1.5) + x;
            startY = y;
            bendX = l.lx * (1.5) - l.lx;
            bendY = (startY * 0.08) + startY;
            endX = (l.lx * 1.9) - l.lx
            endY = (startY * 0.08) + startY
            break;
    }

    return [startX, startY, bendX, bendY, endX, endY];
}

// Old 4
// startX = (x * -1.5) + x;
//             startY = y;
//             bendX = startX * (0.2);
//             bendY = (startY * 0.08) + startY;
//             endX = (l.lx * 0.18)
//             endY = l.ly