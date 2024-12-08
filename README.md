# Circle that with the mouse

This is a simple React application that moves circle with the mouse.

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result.

There are two ways that this application has defined the expected behavior:

1. Using JS events.
2. Using React prop, `onMouseMove`.

### 1. Using JS events

- `src\AppUsingEvents.tsx`

```tsx
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
```

### 2. Using React prop, `onMouseMove`

- `src\AppUsingInBuilt.tsx`

```tsx
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
```
