// InformationDialog.tsx
import React from 'react';
import './InformationDialog.css';
import closeIcon from 'remixicon/icons/System/close-line.svg';
import informationIcon from 'remixicon/icons/System/information-line.svg';
import warningIcon from 'remixicon/icons/System/error-warning-line.svg';
import dangerIcon from 'remixicon/icons/System/spam-line.svg';
import successIcon from 'remixicon/icons/System/checkbox-circle-line.svg';
import Image from "next/image";

export interface InformationDialogProps {
    icon: string;
    title: string;
    text: string;
    breakpoints: 'sm (16px margin)' | 'sm (8px margin)' | 'md' | 'xl 1440' | 'xl 1280';
    Status: 'Info' | 'Success' | 'Warning' | 'Danger';
    withAction: boolean;
}

export const InformationDialog = ({
    icon = informationIcon,
    title = 'Title',
    text = 'Text',
    breakpoints = 'sm (16px margin)',
    Status = 'Info',
    withAction = true,
}: InformationDialogProps) => {
    const renderActions = () => {
        switch (Status) {
            case 'Info':
                return (
                    <Image src={informationIcon} className={`img_${breakpoints.replace(/\s/g, "").replace("(", "").replace(")", "")} ${Status}`} alt="icon" />
                );
            case 'Success':
                return (
                    <Image src={successIcon} className={`img_${breakpoints.replace(/\s/g, "").replace("(", "").replace(")", "")} ${Status}`} alt="icon" />
                );
            case 'Warning':
                return (
                    <Image src={warningIcon} className={`img_${breakpoints.replace(/\s/g, "").replace("(", "").replace(")", "")} ${Status}`} alt="icon" />
                );
            case 'Danger':
                return (
                    <Image src={dangerIcon} className={`img_${breakpoints.replace(/\s/g, "").replace("(", "").replace(")", "")} ${Status}`} alt="icon" />
                );
            default:
                return null;
        }
    };
    return (
        <div className={`confirmation-dialog ${breakpoints.replace(/\s/g, "").replace('(', '').replace(')', '')}`} >
            <div className={`dialog-background dialog-background_${breakpoints.replace(/\s/g, "").replace('(', '').replace(')', '')}`}>
                <div className={`close_${breakpoints.replace(/\s/g, "").replace('(', '').replace(')', '')}`}><Image src={closeIcon} alt={'close'} /></div>
                {renderActions()}
                <h2 className={`title_${breakpoints.replace(/\s/g, "").replace("(", "").replace(")", "")}`} >{Status}</h2>
                <p className={`text_${breakpoints.replace(/\s/g, "").replace("(", "").replace(")", "")}`}>{text}</p>
                {withAction && <div className="dialog-actions"><button className={`done_${breakpoints.replace(/\s/g, "").replace("(", "").replace(")", "")}`} >Done</button></div>}
            </div>
        </div>
    );
};

export default InformationDialog;
