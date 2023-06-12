import { TaskContext } from '@/context/TaskContext'
import { useContext } from 'react'

export const useTaks = () => {
  const context = useContext(TaskContext)
  return context
}
