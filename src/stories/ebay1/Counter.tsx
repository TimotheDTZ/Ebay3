import React, { useState } from 'react';
import './Counter.css';
import binIcon from 'remixicon/icons/System/delete-bin-line.svg';
import Image from "next/image";

type CounterProps = {
    size?: 'lg' | 'md' | 'sm';
    dustbin?: boolean;
    // disabled?: boolean;
    state?: 'default' | 'hover' | 'disabled';
    initialValue?: number;
};

export const Counter = ({
    size = 'md',
    dustbin = false,
    // disabled = false,
    state = 'default',
    initialValue = 0,
    ...props
}: CounterProps) => {
    const [count, setCount] = useState(initialValue);

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount((prevCount) => prevCount - 1);
    };

    const renderDustbin = () => {
        if (dustbin) {
            return <span className="dustbin">🗑️</span>;
        }
        return null;
    };

    const getSizeClass = () => {
        if (size === 'lg') {
            return 'counter-lg';
        } else if (size === 'sm') {
            return 'counter-sm';
        }
        return 'counter-md';
    };

    const getStateClass = () => {
        if (state === 'hover') {
            return 'hover';
        } else if (state === 'disabled') {
            return 'disabled';
        }
        return 'default';
    };

    return (
        <div
            className={`counter ${getSizeClass()} ${getStateClass()}`}
            onClick={handleIncrement}>
            {(dustbin) && <Image className={`count_${size}`} src={binIcon} alt='Bin' />}
            {(!dustbin) && <button className={`button_${size}`} onClick={handleDecrement}>-</button>}
            <span className={`count_${size}`}>{count}</span>
            <button className={`button_${size}`} onClick={handleIncrement}>+</button>

        </div>
    );
};

export default Counter;
