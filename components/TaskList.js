'use client'

import { useTaks } from '@/hooks/useTaks'
import { TaskCard } from './TaskCard'

export const TaskList = () => {
  const { tasks } = useTaks()

  return (
    tasks.length > 0
      ? (
        <ul className='grid gap-4'>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </ul>
        )
      : (
        <div className='ring-1 ring-gray-300 rounded p-6 grid gap-2'>
          <h2 className='text-lg font-medium'>Create your first task!</h2>
          <p>tic, toc</p>
          <div className='flex ring-1 ring-inset ring-gray-300 rounded w-fit text-sm font-medium'>
            <button className='py-2 px-3 border-r border-gray-300'>Delete</button>
            <button className='py-2 px-3'>Edit</button>
          </div>
        </div>
        )
  )
}
