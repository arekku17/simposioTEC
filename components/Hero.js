import React from 'react'

const Hero = () => {
    return (
        <>
            <div
                className="h-screen bg-cover bg-no-repeat absolute top-0 w-screen"
                style={{
                    backgroundImage: 'linear-gradient(to bottom, rgba(5, 6, 14, 0.82), rgba(24, 7, 43, 0.8)), url("/images/background.jpg");'
                }}></div>
        </>
    )
}

export default Hero