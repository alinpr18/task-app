'use client'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { createContext } from 'react'
import { v4 as uuid } from 'uuid'

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage('tasks', [])

  const createTask = (title, description) => {
    setTasks([...tasks, {
      id: uuid(),
      title,
      description
    }])
  }

  const deleteTask = (id) => {
    setTasks([...tasks.filter(task => task.id !== id)])
  }

  const updateTask = (id, updatedTask) => {
    setTasks([...tasks.map(task => task.id === id ? { ...task, ...updatedTask } : task)])
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  )
}
