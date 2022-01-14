import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { createAnswer, recordAnswers } from '../features/answerSlice'
import Option from './Option'

interface IOption {
    id: number
    value: string
}

interface IQuestionProps {
    id: number,
    title: string,
    options: IOption[]
}

const Question: React.FC<IQuestionProps> = (props) => {
    const dispatch = useDispatch()
    const answer = useSelector((state: RootState) => state.answer)
    const [selectedOptionIds, updateSelectedOptionIds] = useState(new Set<number>())

    useEffect(() => {
        dispatch(createAnswer(props.id))
    })

    useEffect(() => {
        updateSelectedOptionIds(new Set())
    }, [props.id])

    const handleSelect = (optionId: number, isSelected: boolean) => {
        if (!isSelected) selectedOptionIds.add(optionId)
        else selectedOptionIds.delete(optionId)
        dispatch(recordAnswers({ questionId: props.id, selectedOptionIds: Array.from(selectedOptionIds) }))
    }

    return (
        <>
            <div className='text-lg tracking-wide py-2'>
                {props.id}. {props.title}
            </div>
            <div className={`relative text-sm border border-[#5E9DD3] p-4 ${answer.value[props.id]?.isLocked ? 'bg-[#D9D9D9] hover:cursor-not-allowed' : ''}`}>
                {props.options.map(option => (
                    <Option
                        key={props.id + '-' + option.id}
                        questionId={props.id}
                        optionId={option.id}
                        value={option.value}
                        onChange={handleSelect}
                    />
                ))}
            </div>
        </>
    )
}

export default Question