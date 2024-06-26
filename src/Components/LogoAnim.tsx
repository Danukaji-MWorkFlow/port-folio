import React from 'react';
import styled, { keyframes } from 'styled-components';

const images = [
    'css.png',
    'html.png',
    'java.svg',
    'laravel.png',
    'node-js.svg',
    'php.png',
    'react.svg',
    'vue-js.png',
];

const scroll = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
`;

const Container = styled.div`
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
`;

const Slider = styled.div`
    display: flex;
    width: calc(100% * 2); /* Adjusted width to allow smooth transition */
    animation: ${scroll} 30s linear infinite;
`;

const Slide = styled.div`
    display: flex;
    width: 50%; /* Adjusted width to fit half of the Slider */
`;

const Image = styled.img`
    width: 80px; /* Adjusted width for each image */
    height: auto;
    margin: 0 55px;

    /* Responsive styles for MD */
    @media (max-width:1025px){
        width: 40px; /* Adjusted width for each image */
        height: 40px;
        margin: 0 28px;
    }

    /* Responsive styles for XS */
    @media (max-width:576px){
        width: 20px; /* Adjusted width for each image */
        height: 20px;
        margin: 0 15px;
    }

`;

const LogoAnim: React.FC = () => {
    return (
        <Container>
            <Slider>
                <Slide>
                    {images.map((image, index) => (
                        <Image key={index} src={`src/assets/${image}`} alt={`logo-${index}`} />
                    ))}
                </Slide>
                <Slide>
                    {images.map((image, index) => (
                        <Image key={index} src={`src/assets/${image}`} alt={`logo-${index}`} />
                    ))}
                </Slide>
                
            </Slider>
        </Container>
    );
};

export default LogoAnim;
