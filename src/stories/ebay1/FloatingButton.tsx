// FloatingButton.tsx
import React from 'react';
import './FloatingButton.css';
import logoIcon from 'remixicon/icons/Logos/remixicon-line.svg';
import Image from "next/image";

export type FloatingButtonProps = {
    status?: 'Focused' | 'Hovered' | 'Pressed' | 'Disabled';
    extended?: boolean;
    label?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const FloatingButton = ({
    status = 'Focused',
    extended = false,
    label = 'Label',
    ...props
}: FloatingButtonProps) => {
    const buttonClassName = `FloatingButton ${status ? status : ''} ${extended ? 'extended' : ''}`;

    return (
        <button className={buttonClassName} {...props}>
            <Image src={logoIcon} alt={''} className={'floating-ico'} />
            {extended && label && <span className="label">{label}</span>}
        </button>
    );
};
