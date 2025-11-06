import { ReactNode } from 'react';

interface IFooterProps {
    children: ReactNode;
}

const Footer = (props: IFooterProps) => {
    return (
        <div className="w-full select-none bg-white bg-opacity-10" id="footer">
            {props.children}
        </div>
    );
};

export default Footer;
