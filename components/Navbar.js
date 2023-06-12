import Link from 'next/link'

export const Navbar = () => {
  return (
    <header className='flex justify-between items-center py-5'>
      <Link href='/'>
        <h1 className='text-2xl font-bold'>Task App</h1>
      </Link>
      <Link className='py-2 px-3 ring-1 ring-inset ring-gray-300 rounded' href='/new'>Add Task</Link>
    </header>
  )
}
