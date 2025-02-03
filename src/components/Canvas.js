import React, { useEffect, useRef } from 'react';
import { initRive } from './splash';  // Nota que ahora importamos de 'splash' sin .js
import './canvas.css';

const Canvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            const riveInstance = initRive(canvasRef.current);

            return () => {
                if (riveInstance) {
                    riveInstance.cleanup();
                }
            };
        }
    }, []);

    return (
        <canvas ref={canvasRef} className="canvas"></canvas>
    );
};

export default Canvas;