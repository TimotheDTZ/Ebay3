import React from 'react';
import './RadioButtonRebirth.css';

interface RadioButtonRebirthProps {
    label: string;
    checked: boolean;
    helper: boolean;
    state: 'Default' | 'Hover' | 'Focus' | 'Disabled' | 'Error';
}

export const RadioButtonRebirth = ({
    label,
    checked,
    helper,
    state,
    ...props
}: RadioButtonRebirthProps) => {
    return (
        <div className={`radioButtonRebirth state${state}`}>
            <input className='input' type="radio" checked={checked} />
            <span className={'checkmark'}></span>
            <span className="label">{label}</span>
            {helper && <span className="helperText">Helper</span>}
        </div>
    );
};

export default RadioButtonRebirth;
