import { useRef } from 'react';
import { Circle } from './Circle'; // Assuming Circle component is imported correctly

function AppUsingInBuilt() {
    const appRef = useRef<HTMLDivElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e) => {

        const currentCircleRef = circleRef.current;

        if (currentCircleRef) {
            currentCircleRef.style.backgroundColor = "blue";

            setTimeout(() => {
                currentCircleRef.style.left = `${e.clientX}px`;
                currentCircleRef.style.top = `${e.clientY}px`;
            }, 100)
        }
    }
    
    return (
        <div ref={appRef} style={{ width: "100vw", height: "100vh" }} onMouseMove={ handleMouseMove }>
            <Circle ref={circleRef} />
        </div>
    );
}

export default AppUsingInBuilt;