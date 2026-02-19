import { useEffect, useRef, useState } from 'react';
import { Engine, Actor, Color } from 'excalibur';

export const GameComponent = () => {
    const [score, setScore] = useState(0); // React houdt de score bij voor de UI
    const canvasRef = useRef(null);

    useEffect(() => {
        const game = new Engine({
            canvasElement: canvasRef.current,
            width: 1200,
            height: 700
        });

        const player = new Actor({ x: 100, y: 100, width: 50, height: 50, color: Color.Red });

        // Logica: als we op de player klikken, score omhoog
        player.on('pointerdown', () => {
            setScore(s => s + 1); // We updaten de React state vanuit Excalibur!
        });

        game.add(player);
        game.start();

        return () => game.stop();
    }, []);

    return (
        <div className="game-container flex justify-center items-center">
            <canvas ref={canvasRef} />

            {/* Dit is je React UI die over de game heen ligt */}
            <div className="ui-layer">
                <h1 style={{ color: 'white' }}>Score: {score}</h1>
                <button onClick={() => alert("Spel gepauzeerd")}>Pauze</button>
            </div>
        </div>
    );
};