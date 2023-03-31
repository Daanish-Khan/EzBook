import Wave from 'react-wavify'

function Waves({colorArray, gap, height, speed, points, amplitude, style}) {
    return (
        <div>
            <Wave
                fill={colorArray[0]}
                paused={false}
                options={{
                    height: height,
                    amplitude: amplitude,
                    speed: speed,
                    points: points
                }}
                style={style}
            />
            <Wave 
                fill={colorArray[1]}
                paused={false}
                options={{
                    height: height + gap,
                    amplitude: amplitude,
                    speed: speed,
                    points: points - 1
                }}
                style={style}
            />
            <Wave 
                fill={colorArray[2]}
                paused={false}
                options={{
                    height: height + gap * 2,
                    amplitude: amplitude,
                    speed: speed,
                    points: points - 2
                }}
                style={style}
            />
            <Wave 
                fill={colorArray[3]}
                paused={false}
                options={{
                    height: height + gap * 3,
                    amplitude: amplitude,
                    speed: speed,
                    points: points - 3
                }}
                style={style}
            />
            <Wave 
                fill={colorArray[4]}
                paused={false}
                options={{
                    height: height + gap * 4,
                    amplitude: amplitude,
                    speed: speed,
                    points: points - 4
                }}
                style={style}
            />
        </div>   
    );
}

export default Waves;