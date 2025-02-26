import React from 'react'

const Card = ({ children }: any) => {
    return (
        <>
            <h1 style={{ color: 'lime' }}>
                {children}
            </h1>
        </>
    )
}

export {
    Card
}