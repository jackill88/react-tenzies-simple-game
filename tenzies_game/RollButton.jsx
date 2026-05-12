export default function RollButton(props) {
    return (
        <div className="roll-div">
        <button onClick={props.rollFn} className="roll-button">Roll</button>
        </div>
    )
}