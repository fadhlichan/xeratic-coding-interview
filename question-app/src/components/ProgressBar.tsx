interface IProgressBarProps {
    currentStep: number
    totalStep: number
}

const ProgressBar: React.FC<IProgressBarProps> = (props) => {
    return (
        <div className='absolute w-full h-1'>
            <div className='absolute w-full h-1 bg-[#4473C5] bg-opacity-50 transition duration-200'></div>
            <div className={`absolute h-1 bg-[#4473C5]`} style={{ width: (props.currentStep / props.totalStep * 100) + '%' }}></div>
        </div>
    )
}

export default ProgressBar