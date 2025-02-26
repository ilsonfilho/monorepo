import './styles.css'

const Button = ({ onClick, children }: any) => {
    return (
        <>
            <button className='botao' onClick={onClick}
            >{children}</button>
        </>
    )
}

export {
    Button
}