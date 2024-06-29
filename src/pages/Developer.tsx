import React from 'react';

interface DevDetails {
    DevName: string;
    DevAge: string;
    UseTechnologies: string[];
    devImgPath: string;

}

const Developer: React.FC<DevDetails> = ({ DevName, DevAge, UseTechnologies, devImgPath }) => {
    return (
        <>
            {DevName}
            {devImgPath}
            {DevAge}
            {UseTechnologies}
        </>
    );
}

export default Developer;