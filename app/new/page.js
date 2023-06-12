import { Form } from '@/components/Form'

export default function NewPage () {
  return (
    <>
      <h1 className='pb-6 font-semibold text-lg'>Create Task</h1>
      <Form params={false} />
    </>
  )
}
