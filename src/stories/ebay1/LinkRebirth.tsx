import React, { ReactNode } from 'react';
import imageleft from 'remixicon/icons/Media/image-line.svg';
import imageRight from 'remixicon/icons/Arrows/arrow-right-line.svg';
import Image from "next/image";

import './LinkRebirth.css';

interface LinkRebirthProps {
    iconLeft?: boolean;
    iconRight?: boolean;
    color?: 'default' | 'primary' | 'white';
    size?: 'md' | 'sm';
    state?: 'default' | 'focus' | 'hover';
    children: ReactNode;
}

export const LinkRebirth = ({
    iconLeft = false,
    iconRight = false,
    color = 'default',
    size = 'md',
    state = 'default',
    children = 'Link',
}: LinkRebirthProps) => {
    const className = `link-rebirth ${color} ${size} ${state}`;

    return (
        <a className={className}>
            {iconLeft && <Image src={imageleft} alt='imageleft' className='Image' />}
            {children}
            {iconRight && <Image src={imageRight} alt='imageRight' className='Image' />}
        </a>
    );
};

export default LinkRebirth;
