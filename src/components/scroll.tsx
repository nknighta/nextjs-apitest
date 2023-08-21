import React from 'react';

type ScrollableBoxProps = {
    children: React.ReactNode;
    width?: string;
};

const ScrollableBox: React.FC<ScrollableBoxProps> = ({ children ,width}) => {
    return (
        <div style={{
            width: width == undefined ? '100%' : width,
            height: '200px',
            overflow: 'auto',
            backgroundColor: "#aaaaaa",
        }}>
            {children}
        </div>
    );
};

export default ScrollableBox;
