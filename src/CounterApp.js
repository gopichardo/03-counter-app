import { Fragment, useState } from "react"
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {

    //Hook State
    const [counter, setCounter] = useState(value);

    const handleAdd = (e) => {
        setCounter(counter + 1);
    }

    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(value);
    }

    return <Fragment>
        <h1>Counter App</h1>
        <h2>Valor actual: {counter}</h2>

        <button type="button" onClick={handleAdd}>+1</button>
        <button type="button" onClick={handleReset}>Reset</button>
        <button type="button" onClick={handleSubstract}>-1</button>
    </Fragment>;
};

CounterApp.propTypes = {
    value: PropTypes.number
};

CounterApp.defaultProps = {
    value: 0
};

export default CounterApp;