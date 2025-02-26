
const Button = ({ onClick }: any) => {
    return (
        <>
            <button style={{
                padding: '1rem 2rem',
                borderRadius: '.4rem',
                background: '#32743b',
                color: '#fff',
                border: 'none',
            }}
                onClick={onClick}
            >BOTÃO</button>
        </>
    )
}

export {
    Button
}