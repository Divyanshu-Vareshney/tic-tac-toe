import React, { useState } from 'react'
import Square from './Square'

function Board() {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const checkWinner=()=>{
        const winnerLogic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(var logic of winnerLogic){
            const [a,b,c]=logic;
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
                return state[a];
            }
        }
        return false;
    };
    const handlePlay=()=>{
        setState(Array(9).fill(null));
    }
    
    const handleClick=(index)=>{
        if(state[index]!==null){
            return;
        };
        const copyState=[...state];
        copyState[index]=isXTurn?"X":"0";
        setState(copyState);
        setIsXTurn(!isXTurn);
    }
    const isWinner=checkWinner();
    return (
        <div className='board-container'>
            {isWinner ? (<><h1>{isWinner} is the winner</h1> 
            <button onClick={()=>{handlePlay()}}>PLAY AGAIN</button></>): 
            (<>
            <h1>It's Your Turn  {isXTurn?"X":"0"}</h1>
            <div className="board-row">
                <Square onClick={()=>{handleClick(0)}} value={state[0]} />
                <Square onClick={()=>{handleClick(1)}} value={state[1]} />
                <Square onClick={()=>{handleClick(2)}} value={state[2]} />
            </div>
            <div className="board-row">
                <Square onClick={()=>{handleClick(3)}} value={state[3]} />
                <Square onClick={()=>{handleClick(4)}} value={state[4]} />
                <Square onClick={()=>{handleClick(5)}} value={state[5]} />
            </div>
            <div className="board-row">
                <Square onClick={()=>{handleClick(6)}} value={state[6]} />
                <Square onClick={()=>{handleClick(7)}} value={state[7]} />
                <Square onClick={()=>{handleClick(8)}} value={state[8]} />
            </div></>)}
        </div>
    )
}

export default Board