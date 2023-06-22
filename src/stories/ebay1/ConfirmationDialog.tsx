// ConfirmationDialog.tsx
import React from 'react';
import './ConfirmationDialog.css';

export interface ConfirmationDialogProps {
    title: string;
    text: string;
    breakpoints: 'sm (16px margin)' | 'sm (8px margin)' | 'md' | 'xl 1440' | 'xl 1280';
    actions: 'Single Button' | 'Double Button' | 'Button Link';
    hasCloseIcon: boolean;
}

export const ConfirmationDialog = ({
    title = 'Title',
    text = 'Text',
    breakpoints = 'sm (16px margin)',
    actions = 'Single Button',
    hasCloseIcon = true,
}: ConfirmationDialogProps) => {
    const renderActions = () => {
        switch (actions) {
            case 'Single Button':
                return (
                    <div className="dialog-actions">
                        <button className={`done_${breakpoints.replace(/\s/g, "").replace("(", "").replace(")", "")}`} >Done</button>
                    </div>
                );
            case 'Double Button':
                return (
                    <div className="dialog-actions">
                        <button className={`back_${breakpoints.replace(/\s/g, "").replace("(", "").replace(")", "")}_2`}>Back</button>
                        <button className={`done_${breakpoints.replace(/\s/g, "").replace("(", "").replace(")", "")}_2`} >Done</button>
                    </div>
                );
            case 'Button Link':
                return (
                    <div className="">
                        <button className={`done_${breakpoints.replace(/\s/g, "").replace("(", "").replace(")", "")}`} >Done</button>
                        <a className={`link_${breakpoints.replace(/\s/g, "").replace("(", "").replace(")", "")}`}>Link Label</a>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className={`confirmation-dialog ${breakpoints.replace(/\s/g, "").replace('(', '').replace(')', '')}`} >
            <div className={`dialog-background dialog-background_${breakpoints.replace(/\s/g, "").replace('(', '').replace(')', '')}`}>
                {hasCloseIcon && <div className={`close_${breakpoints.replace(/\s/g, "").replace('(', '').replace(')', '')}`}>X</div>}
                <h2 className={`title_${breakpoints.replace(/\s/g, "").replace("(", "").replace(")", "")}`} >{title}</h2>
                <p className={`text_${breakpoints.replace(/\s/g, "").replace("(", "").replace(")", "")}`}>{text}</p>
                {renderActions()}
            </div>
        </div>
    );
};

export default ConfirmationDialog;
