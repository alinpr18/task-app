import { useEffect, useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(initialValue)

  useEffect(() => {
    const storage = JSON.parse(window.localStorage.getItem(key))
    if (storage) return setState(storage)
  }, [key])

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
