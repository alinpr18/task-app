'use client'

import { useTaks } from '@/hooks/useTaks'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

export const TaskCard = ({ task }) => {
  const { deleteTask } = useTaks()
  const router = useRouter()

  const handleClick = (task) => {
    deleteTask(task.id)
    toast.success('Task delete successfully')
  }

  return (
    <li className='ring-1 ring-gray-300 rounded p-6 grid gap-2'>
      <h2 className='text-lg font-medium'>{task.title}</h2>
      <p>{task.description}</p>
      <div className='flex ring-1 ring-inset ring-gray-300 rounded w-fit text-sm font-medium'>
        <button onClick={() => handleClick(task)} className='py-2 px-3 border-r border-gray-300'>Delete</button>
        <button onClick={() => router.push(`/edit/${task.id}`)} className='py-2 px-3'>Edit</button>
      </div>
    </li>
  )
}
