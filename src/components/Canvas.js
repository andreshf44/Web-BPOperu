import React, {useEffect, useRef, useState} from 'react';
import { initRive } from './splash';
import './canvas.css';

const Canvas = () => {
    const canvasRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
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
        <canvas ref={canvasRef} className={`canvas ${scrolled ? 'scrolled' : ''}`}></canvas>
    );


};

export default Canvas;