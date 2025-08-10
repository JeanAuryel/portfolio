/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes,
    onClick,
    type,
    disabled,
    download,
}: {
    href?: string;
    target?: string;
    label: string;
    icon?: React.ReactNode;
    classes?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    download?: boolean | string;
}) => {
    if (href) {
        return (
            <a 
                href={href}
                target={target}
                download={download}
                className={`btn btn-primary ${classes || ''}`}
            >
                {label}
                
                {icon &&
                <span className="material-symbols-rounded" aria-hidden="true">
                    {icon}
                </span>
                }  
            </a>
        );
    } else {
        return (
            <button 
                className={`btn btn-primary ${classes || ''}`}
                onClick={onClick}
                type={type || 'button'}
                disabled={disabled}
            >
                {label}
                
                {icon &&
                <span className="material-symbols-rounded" aria-hidden="true">
                    {icon}
                </span>
                }
            </button>
        );
    }
}
ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.node,
    classes: PropTypes.string,
    download: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}


const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes,
}: {
    href?: string;
    target?: string;
    label: string;
    icon?: React.ReactNode;
    classes?: string;
}) => {
    if (href) {
        return (
            <a 
                href={href}
                target={target}
                className={`btn btn-outline ${classes || ''}`}
            >
                {label}
                
                {icon &&
                <span className="material-symbols-rounded" aria-hidden="true">
                    {icon}
                </span>
                }  
            </a>
        );
    } else {
        return (
            <button className={`btn btn-outline ${classes || ''}`}>
                {label}
                
                {icon &&
                <span className="material-symbols-rounded" aria-hidden="true">
                    {icon}
                </span>
                }
            </button>
        );
    }
}
ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.node,
    classes: PropTypes.string
}

export {
    ButtonPrimary,
    ButtonOutline
}