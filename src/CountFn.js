import React, { useState } from "react";
// import chPropTypes  from "prop-types";
import PropTypes from 'prop-types';
// let PropTypes = require('prop-types');


Counter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};


function Counter({min=1, max, current, onChange}) {
    // let [current, setCurrent] = useState(min);
    // console.log(current)

    let [inpVal, setInpVal ] = useState(current);
    let onInput = e => setInpVal(e.target.value);


    function parseCurrentStr(e) {
        let num = parseInt(e.target.value)
        applyCurerrent(isNaN(num) ? min : max)

    }

    function onKeyEnter(e) {
        if (e.keyCode === 13){
            parseCurrentStr(e);
            console.log("Key Code 13")
        }
        
    }


    function applyCurerrent(num) {
        let validNum = Math.max(min, Math.min(max, num));
        onChange(validNum)
        
    }


    let inc = () => applyCurerrent(current + 1);
    let dec = () => applyCurerrent(current - 1);


    // function inc() {export default 
    // }

    // function dec() {
    //     if (current > min) {
    //         setCurrent(current - 1)
    //     } else {
    //         console.log("Stop MIN")
    //     }
    // }

    return(
        <div>
            <hr />
            <button type="button" onClick={ dec }>-</button>
            {/* <span>{ current }</span> */}
            <input type="text" value={inpVal} onChange={onInput} onBlur={parseCurrentStr} onKeyDown={onKeyEnter}/>
            <button type="button" onClick={ inc }>+</button>
        </div>
    )
}



export default Counter;