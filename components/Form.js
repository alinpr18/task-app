'use client'

import { useTaks } from '@/hooks/useTaks'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

export const Form = ({ params }) => {
  const { createTask, updateTask, tasks } = useTaks()
  const router = useRouter()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data)
      toast.success('Task updated successfully')
    } else {
      createTask(data.title, data.description)
      toast.success('Task created successfully')
    }
    router.push('/')
  })

  useEffect(() => {
    if (params.id) {
      const taskId = tasks.find(task => task.id === params.id)
      if (taskId) {
        setValue('title', taskId.title)
        setValue('description', taskId.description)
      }
    }
  }, [params.id, setValue, tasks])

  return (
    <form onSubmit={onSubmit}>
      <div className='grid gap-y-8'>
        <div className='grid gap-2'>
          <label htmlFor='title' className='font-medium text-sm w-fit'>Title</label>
          <input {...register('title', { required: true })} className='ring-1 max-w-md ring-gray-300 rounded py-1.5 px-3 text-sm' id='title' placeholder='My first task' />
          {errors.title && (
            <span className='text-red-600 font-medium text-sm'>This field is required</span>
          )}
        </div>
        <div className='grid gap-2'>
          <label className='w-fit text-sm font-medium' htmlFor='description'>Description</label>
          <textarea {...register('description', { required: true })} rows={3} className='ring-1 ring-gray-300 rounded py-1.5 px-3 text-sm max-w-2xl' id='description' />
          {errors.description && (
            <span className='text-red-600 font-medium text-sm'>This field is required</span>
          )}
        </div>
      </div>
      <div className='mt-6 flex gap-x-4'>
        <button type='button' onClick={() => router.push('/')} className='py-2 px-3 text-sm font-semibold rounded-md'>Cancel</button>
        <button type='submit' className='py-2 px-3 bg-indigo-600 text-sm font-semibold rounded-md text-white'>Save</button>
      </div>
    </form>
  )
}
