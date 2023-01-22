import { useState } from 'react';
import './Application.css';

export const Application = () => {
    const [greetMsg, setGreetMsg] = useState('');
    const [name, setName] = useState('HUH');

    async function greet() {
        setGreetMsg(name);
    }

    return (
        <div className="container">
            <h1>Welcome to Tauri!</h1>

            <p>Click on the Tauri, Vite, and React logos to learn more.</p>

            <div className="row">
                <div>
                    <input
                        id="greet-input"
                        onChange={(e) => setName(e.currentTarget.value)}
                        placeholder="Enter a name..."
                    />
                    <button type="button" onClick={() => greet()}>
                        Greet
                    </button>
                </div>
            </div>
            <p>{greetMsg}</p>
        </div>
    );
};
