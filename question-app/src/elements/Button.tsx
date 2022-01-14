interface IButtonProps {
    text: string
    isDisabled?: boolean
    onClick: () => void
}

const Button: React.FC<IButtonProps> = (props) => {
    return (
        <button
            className={`bg-[#4473C5] text-white font-semibold px-4 py-[1px] rounded-md ${props.isDisabled ? 'disabled:opacity-50 disabled:cursor-not-allowed' : ''}`}
            disabled={props.isDisabled}
            onClick={() => props.onClick()}
        >
            {props.text}
        </button>
    )
}

export default Button