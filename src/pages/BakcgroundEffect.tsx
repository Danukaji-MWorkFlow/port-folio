import React from 'react';
import '../BackgroundEffect.css';

const BackgroundEffect: React.FC = () => {
    return (
        <div className="relative h-screen bg-blue-100">
            <div className='absolute inset-0 '>
                <div className='absolute inset-0 grid grid-cols-10 gap-4'>
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className='h-full bg-green-500 transform -skew-y-6' style={{ left: `${i * 10}%`, width: '10%' }} />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default BackgroundEffect;