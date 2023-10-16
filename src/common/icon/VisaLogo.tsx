const VisaLogo = ({ size, fill }: { size: number; fill: string }) => {
    return (
        <div style={{ width: size, height: size / 3 }}>
            <svg
                viewBox="0 0 256 83"
                version="1.1"
                preserveAspectRatio="xMidYMid"
                fill={fill}
            >
                {/* <defs>
                <linearGradient
                    x1="45.9741966%"
                    y1="-2.00617467%"
                    x2="54.8768726%"
                    y2="100%"
                    id="linearGradient-1"
                >
                    <stop stop-color="#222357" offset="0%"></stop>
                    <stop stop-color="#254AA5" offset="100%"></stop>
                </linearGradient>
            </defs> */}
                <path
                    d="M132.397094,56.2397455 C132.251036,44.7242808 142.65954,38.2977599 150.500511,34.4772086 C158.556724,30.5567233 161.262627,28.0430004 161.231878,24.5376253 C161.17038,19.1719416 154.805357,16.804276 148.847757,16.7120293 C138.454628,16.5505975 132.412467,19.5178668 127.607952,21.7625368 L123.864273,4.24334875 C128.684163,2.02174043 137.609033,0.084559486 146.864453,-7.10542736e-15 C168.588553,-7.10542736e-15 182.802234,10.7236802 182.879107,27.3511501 C182.963666,48.4525854 153.69071,49.6210438 153.890577,59.05327 C153.959762,61.912918 156.688728,64.964747 162.669389,65.7411565 C165.628971,66.133205 173.800493,66.433007 183.0636,62.1665965 L186.699658,79.11693 C181.718335,80.931115 175.314876,82.6684285 167.343223,82.6684285 C146.895202,82.6684285 132.512402,71.798691 132.397094,56.2397455 M221.6381,81.2078555 C217.671491,81.2078555 214.327548,78.8940005 212.836226,75.342502 L181.802894,1.24533061 L203.511621,1.24533061 L207.831842,13.1835926 L234.360459,13.1835926 L236.866494,1.24533061 L256,1.24533061 L239.303345,81.2078555 L221.6381,81.2078555 M224.674554,59.6067505 L230.939643,29.5804456 L213.781755,29.5804456 L224.674554,59.6067505 M106.076031,81.2078555 L88.9642665,1.24533061 L109.650591,1.24533061 L126.754669,81.2078555 L106.076031,81.2078555 M75.473185,81.2078555 L53.941265,26.7822953 L45.2316377,73.059396 C44.2092367,78.2252115 40.1734431,81.2078555 35.6917903,81.2078555 L0.491982464,81.2078555 L0,78.886313 C7.22599245,77.318119 15.4359498,74.7890215 20.409585,72.083118 C23.4537265,70.4303645 24.322383,68.985166 25.3217224,65.0569935 L41.8185094,1.24533061 L63.68098,1.24533061 L97.1972855,81.2078555 L75.473185,81.2078555"
                    // fill="url(#linearGradient-1)"
                    transform="translate(128.000000, 41.334214) scale(1, -1) translate(-128.000000, -41.334214) "
                ></path>
            </svg>
        </div>
    );
};

export default VisaLogo;