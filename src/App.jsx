
import { GameComponent} from "./GameComponent.jsx";
import './index.css';

function App() {
    return (
        <div className="app-container">

            {/* React UI die over de game heen valt */}
            <div className="ui-overlay">

            {/* De Game engine */}
            <div className="game-wrapper flex w-100vw h-100vh max-w-100% max-h-100% justify-center items-center bg-black overflow-hidden  ">
                <GameComponent />
            </div>


                <button onClick={() => alert('Pauze!')}>Pauze</button>
            </div>
        </div>
    );
}

export default App
