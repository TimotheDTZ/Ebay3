// Input.tsx
import React from 'react';
import Image from "next/image";
import './Input.css';
import iconInput from 'remixicon/icons/Logos/remixicon-line.svg';

export interface InputProps {
    label: string;
    state: 'default' | 'focus' | 'hover' | 'pressed' | 'valid' | 'error' | 'disabled';
    withValue: boolean;
    value?: string;
    helper: boolean;
    helperText?: string;
    icon: 'none' | 'left' | 'right' | 'button';
}

export const Input = ({
    label = 'Label',
    state = 'default',
    withValue = false,
    value = 'Value',
    helper = false,
    helperText = 'Helper text',
    icon = 'none',
}: InputProps) => {
    const inputClass = `input ${state}`;

    return (
        <div>
            {/*<input className={'input'} type="text" value={withValue ? value : ''} />*/}
            {/*{helper && <div>{helperText}</div>}*/}
            {/*{icon === 'left' && <div>Icon à gauche de l input</div>}*/}
            {/*{icon === 'right' && <div>Bouton à droite de l input</div>}*/}
            {/*{icon === 'button' && <button>Button</button>}*/}
            <div className="input-container">
                <input type="text" className="custom-input" placeholder={'text'}/>
                <div className="image-container">
                    <Image src={iconInput} alt={''} className="custom-image"/>
                </div>
                <div className="input-label"><span>Label</span></div>
                <button className="custom-button">Bouton</button>
            </div>
        </div>
    );
};
