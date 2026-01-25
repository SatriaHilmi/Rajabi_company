import { useEffect, useState } from "react";
import bg1 from "../assets/wood.jpg";
import bg2 from "../assets/wood1.jpg";
import bg3 from "../assets/wood2.jpg";

export const Bgslider = () => {
    const images = [bg1, bg2, bg3];

    const [current, setCurrent] = useState(0);
    const [prev, setPrev] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrev(current);
            setCurrent((p) => (p + 1) % images.length);
            setIsFading(true);

            // setelah animasi selesai, reset fade
        }, 4000);

        return () => clearInterval(interval);
    }, [current]);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Gambar sebelumnya (fade out) */}
            <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isFading ? "opacity-0" : "opacity-100"
                    }`}
                style={{
                    backgroundImage: `url(${images[prev].src})`,
                }}
            />

            {/* Gambar sekarang (fade in + zoom halus) */}
            <div
                className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ${isFading ? "opacity-100" : "opacity-100"
                    }`}
                style={{
                    backgroundImage: `url(${images[current].src})`,
                }}
            />

            {/* Optional: efek gradient biar lebih cinematic */}
            <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/20 to-black/50" />
        </div>
    );
};
