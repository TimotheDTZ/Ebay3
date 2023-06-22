// Breadcrumb.tsx
import React from 'react';
import './Breadcrumb.css';

export interface BreadcrumbProps {
    breadcrumbs: string[];
    breakpoints: 'lg+' | 'sm to md';
    backgroundColor: 'G000' | 'G200' | 'transparent';
    showTitle: boolean;
    title?: string;
}

export const Breadcrumb = ({
    breadcrumbs = ["Home", "Page Title"],
    breakpoints = 'lg+',
    backgroundColor = 'G000',
    showTitle = true,
    title = "Page Title",
    ...props
}: BreadcrumbProps) => {
    return (
        <div className={`breadcrumb_${breakpoints.replace(' ', '').replace('+', '')} ${backgroundColor}`} >
            {breadcrumbs.map((breadcrumb, index) => (
                <React.Fragment key={index}>
                    {index !== breadcrumbs.length - 1 && <span className={`breadcrumb-item underline ${backgroundColor}`}>{breadcrumb}</span>}
                    {index == breadcrumbs.length - 1 && <span className={`breadcrumb-item ${backgroundColor}`}>{breadcrumb}</span>}
                    {index !== breadcrumbs.length - 1 && <span className={`breadcrumb-separator ${backgroundColor}`}>&gt;</span>}
                </React.Fragment>
            ))}
            {showTitle && <h2 className={`breadcrumb-title ${backgroundColor}`}>{title}</h2>}
        </div>
    );
};

export default Breadcrumb;
