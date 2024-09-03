import React from "react";






const TicTacToe = () => {  
    const [squares, setSquares] = useState(Array(9).fill(null));  
    const [xIsNext, setXIsNext] = useState(true);  
    const winner = calculateWinner(squares);  

    const handleClick = (i) => {  
        if (squares[i] || winner) return;  
        const newSquares = squares.slice();  
        newSquares[i] = xIsNext ? 'X' : 'O';  
        setSquares(newSquares);  
        setXIsNext(!xIsNext);  
    };  

    const renderStatus = () => {  
        if (winner) {  
            return `Winner: ${winner}`;  
        } else {  
            return `Next player: ${xIsNext ? 'X' : 'O'}`;  
        }  
    };  

    return (  
        <div className="game">  
            <div className="game-status">{renderStatus()}</div>  
            <Board squares={squares} onClick={handleClick} />  
        </div>  
    );  
};  