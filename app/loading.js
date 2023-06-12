export default function Loading () {
  const tasks = Array(5).fill(null)

  return (
    <ul className='grid gap-2'>
      {tasks.map((_, i) => (
        <li key={i} className='ring-1 ring-gray-300 rounded p-6 grid gap-2'>
          <h2 className='animate-pulse h-[28px] bg-gray-300 rounded max-w-[200px]' />
          <p className='animate-pulse h-[24px] bg-gray-300 rounded max-w-[150px]' />
          <div className='flex gap-[1px] animate-pulse rounded overflow-auto w-fit text-sm font-medium'>
            <button className='py-2 px-3 h-9 animate-pulse w-[68.39px] bg-gray-300' />
            <button className='py-2 px-3 animate-pulse w-[49.91px] bg-gray-300' />
          </div>
        </li>
      ))}
    </ul>
  )
}
