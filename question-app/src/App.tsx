import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lockAnswer } from './features/answerSlice'
import { RootState } from './app/store'
import questions from './question.json'

import ProgressBar from './components/ProgressBar'
import Question from './components/Question'
import Button from './elements/Button'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const answer = useSelector((state: RootState) => state.answer)
  const [page, setPage] = useState<number>(1)
  const [isContinue, setContinue] = useState<boolean>(false)
  const [isFinish, setFinish] = useState<boolean>(false)

  useEffect(() => {
    setContinue(!!answer.value[page]?.selectedOptionIds.length)
  }, [answer.value, page])

  const handlePrev = () => {
    setPage(page - 1)
  }

  const handleNext = () => {
    if (page === questions.length) return handleFinish()
    dispatch(lockAnswer(page))
    setPage(page + 1)
  }

  const handleFinish = () => {
    setFinish(true)
    dispatch(lockAnswer(page))
  }

  return (
    <div className='w-full min-h-screen bg-white'>
      <ProgressBar currentStep={page} totalStep={questions.length} />

      <div className='w-full sm:w-[500px] bg-white rounded-sm sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 px-4 py-2'>
        <Question {...questions[page - 1]} />

        <div className='py-4 flex justify-end items-center space-x-4'>
          {/* Hide Previous button if we are in the first question */}
          {!(page === 1) && <Button text='Prev' onClick={handlePrev} />}

          {/* Disable Next button if current question isn't answered yet */}
          {/* Hide Next button if all questions is finished */}
          {(!isFinish || page !== questions.length) && <Button
            text={page === questions.length ? 'Finish' : 'Next'}
            isDisabled={!isContinue}
            onClick={handleNext}
          />}
        </div>
      </div>
    </div>
  )
}

export default App
