import { Form } from '@/components/Form'

export default function EditPage ({ params }) {
  return (
    <>
      <h1 className='pb-6 font-semibold text-lg'>Edit Task</h1>
      <Form params={params} />
    </>
  )
}
