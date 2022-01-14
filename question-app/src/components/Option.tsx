import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { RootState } from '../app/store'

interface IOptionProps {
    questionId: number
    optionId: number
    value: string
    onChange: (optionId: number, isSelected: boolean) => void
}

const Option: React.FC<IOptionProps> = (props) => {
    const answer = useSelector((state: RootState) => state.answer)
    const [isSelected, setIsSelected] = useState<boolean>(false)

    useEffect(() => {
        if (answer.value[props.questionId]) {
            const selectedOptionIds = new Set(answer.value[props.questionId].selectedOptionIds)
            setIsSelected(selectedOptionIds.has(props.optionId))
        }
    }, [answer.value, props.questionId])

    const handleSelect = () => {
        if (answer.value[props.questionId]?.isLocked) return
        setIsSelected(!isSelected)
        props.onChange(props.optionId, isSelected)
    }

    return (
        <div className='flex justify-start items-center space-x-4 mb-4 last:mb-0'>
            {/* Disable to check the option if the question has been answered (already proceed to the next question) */}
            <div
                className={`relative ${answer.value[props.questionId]?.isLocked ? 'cursor-not-allowed' : ''}`}
                onClick={handleSelect}
            >
                <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute left-1 bottom-0.5 ${isSelected ? 'opacity-100' : 'opacity-0'}`}
                >
                    <path
                        d="M4.5 12.5L1 13.5L6.5 22L23 1L6.5 17.5L4.5 12.5Z"
                        fill="black"
                        stroke="black"
                    />
                </svg>
                <div className='w-5 h-5 border border-[#609CD2]'></div>
            </div>
            <span>{props.value}</span>
        </div>
    )
}

export default Option