import React, {useState} from 'react'

const BoxGenerator = props => {
    const [color, setColor] = useState("");

    const createColor = (e) => {
        e.preventDefault();
        props.handleNewBox(color)
    };


    return(
        <>
        <div>
            <form onSubmit={createColor}>
                <div>
                    <label>Color: </label>
                    <input type="text" onChange={(e) => setColor(e.target.value)}/>
                    <input type="submit" value="Add"/>
                </div>
            </form>
            {
                props.boxes.map(( color, i ) => {
                    return(
                        <div style={{height:'50px', backgroundColor: color}}>{color}</div>
                    )
                })
            }
        </div>

        </>
    )
}

export default BoxGenerator