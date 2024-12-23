import { useEffect, useRef } from 'react';
import { Circle } from './Circle'; // Assuming Circle component is imported correctly

function AppUsingEvents() {
  const appRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {

    const currentCircleRef = circleRef.current;

    if (currentCircleRef) {
      currentCircleRef.style.backgroundColor = "red";
      
      setTimeout(() => {
        currentCircleRef.style.left = `${e.clientX}px`;
        currentCircleRef.style.top = `${e.clientY}px`;
    }, 100)
    }
  }

  useEffect(() => {
    const currentRef = appRef.current;
    
    if (currentRef) {
      currentRef.addEventListener("mousemove", handleMouseMove);
      return () => {
        currentRef.removeEventListener("mousemove", handleMouseMove);
      }
    }
  }, []);

  return (
    <div ref={appRef} style={{ width: "100vw", height: "100vh"}}>
      <Circle ref={circleRef} />
    </div>
  );
}

export default AppUsingEvents;