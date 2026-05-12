import React from "react";
import Dice from "./Dice";
import RollButton from "./RollButton"
import Confetti from "./Confetti"

export default function App() {

    function getRandomValue1to6() {
        return Math.floor(Math.random() * 6) + 1;
    }

    const [showConfetti, setShowConfetti] = React.useState(false)
    const [dices, setDices] = React.useState([{"id": 1, "value": 1, "isHeld": false},
         {"id": 2, "value": getRandomValue1to6(), "isHeld": false},
         {"id": 3, "value": getRandomValue1to6(), "isHeld": false},
         {"id": 4, "value": getRandomValue1to6(), "isHeld": false}, 
         {"id": 5, "value": getRandomValue1to6(), "isHeld": false}, 
         {"id": 6, "value": getRandomValue1to6(), "isHeld": false},
         {"id": 7, "value": getRandomValue1to6(), "isHeld": false},
         {"id": 8, "value": getRandomValue1to6(), "isHeld": false},
         {"id": 9, "value": getRandomValue1to6(), "isHeld": false},
         {"id": 10, "value": getRandomValue1to6(), "isHeld": false},
         ]);

    const pickedNumber = React.useRef(null);
    const round = React.useRef(1);

    function nextRound() {
        round.current += 1;
        pickedNumber.current = null;
        setDices(prevDices => {
            return prevDices.map(dice => {
                return {...dice, isHeld: false, value: getRandomValue1to6()}
            })
        });
    };

    React.useEffect(() => {
        const allHeld = dices.every(dice => dice.isHeld);
        if (allHeld) {
            setShowConfetti(true);
            
            nextRound();
        }
    }, [dices]);



    function roll(dice) {
        // protect held dices from being rolled
        return dice.isHeld ? dice : {...dice, value: getRandomValue1to6()}
    }

    function handleClick(diceId) {
        console.log(`Dice ${diceId} was clicked`)
        if (diceId) {

            // clear confetti
            setShowConfetti(false);

            const pickedValue = dices.find(dice => dice.id === diceId).value

            if (pickedNumber.current === null) {
                // get value of the dice that was clicked
                pickedNumber.current = pickedValue
            } else
            {
                if (pickedNumber.current !== pickedValue) {
                    return // do nothing
                }
            }

            setDices(prevDices => {
                return prevDices.map(dice => {
                    return (dice.id === diceId) ? {...dice, isHeld: true} : dice
                })
            }); 
            
        };
    }

    const diceElements = dices.map(dice => (
        <Dice key={dice.id} id={dice.id} isHeld={dice.isHeld} value={dice.value} holdFn={handleClick} />
    ))


    return (
        <>
        {showConfetti && <Confetti />}    
        <div className="tenzies"> 
            <div className="tenzies-inner">
                <div className="game-field">
                    <h2 className="title">Tenzies</h2>
                    <div className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</div>

                    <div className="dice-container">    
                        {diceElements}
                    </div>

                    <RollButton rollFn={()=> {console.log("rolling"); setDices(prevDices => prevDices.map(dice => roll(dice)))}} />
                </div> 

            </div>    
        </div>
        </>
    )
}