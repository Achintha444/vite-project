import { forwardRef } from "react";

export const Circle = forwardRef<HTMLDivElement>((_, ref) => {
    return (
      <div 
        ref={ref} 
        style={{ 
          width: "20px", 
          height: "20px", 
          borderRadius: "50%", 
          position: "relative"
        }} 
      />
    );
  });
