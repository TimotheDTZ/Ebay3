// Import dependencies
import React from 'react';
import './Pagination.css';

// Props interface
interface PaginationProps {
    state?: 'default' | 'hover' | 'focus' | 'disabled';
    countButtonState?: { [pageNumber: number]: 'active' | 'default' | 'hover' | 'focus' | 'disabled' };
}

// Pagination component
export const Pagination = ({
    state = 'default',
    countButtonState = { 1: 'active', 2: 'default', 3: 'hover', 4: 'focus', 5: 'disabled' },
}: PaginationProps) => {
    return (
        <div className={`pagination ${state}`}>
            {[1, 2, 3, 4, 5].map((pageNumber) => (
                <button key={pageNumber} className={`countButton ${countButtonState[pageNumber] || 'default'}`}>
                    {pageNumber}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
