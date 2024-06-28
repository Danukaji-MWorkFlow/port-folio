import React from 'react';
import './LineAnimation.css';
import IC3D from './IC3D';

const AnimatedLine: React.FC = () => {

    return (
        <div className="relative flex items-center justify-center py-20 line-animation">
            <IC3D />
        </div>

    );
};

export default AnimatedLine;
