import { useState, useEffect } from 'react';
import Cell from '../Cell';

const Grid = (props) => {

    const [cells, setCells] = useState([]);

    /**
     * Generate a random RGB
     * @returns A string of a random RGB
     */
    const generateRandomColor = () => {
        const r = 0 + Math.floor(Math.random() * (255 - 0 + 1));
        const g = 0 + Math.floor(Math.random() * (255 - 0 + 1));
        const b = 0 + Math.floor(Math.random() * (255 - 0 + 1));
        const rgb = `rgb(${r},${g},${b})`;
        return rgb;
    }

    const createCells = () => {
        // loop to generate random cells
        let random25 = [];
        for (let i = 0; i < 25; i++) {
            const cell = {
                id: i,
                background: generateRandomColor()
            }
            random25.push(cell);

        }
        setCells(random25);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            createCells();
        }, 100);

        return () => clearInterval(interval);

    });

    return (
        <div className="grid">
            {
                cells.map((cell) => (<Cell key={cell.id} background={cell.background} />))
            }
        </div>
    )
}

export default Grid;