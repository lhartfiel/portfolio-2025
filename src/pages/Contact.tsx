import { gql, useMutation } from '@apollo/client/index.js'
import { useState } from 'react'

const CONTACT_MUTATION = gql`
  mutation createContactMutation($name: String!, $email: String!, $message: String!) {
    createContact(input: { name: $name, email: $email, message: $message }) {
      id
      name
      email
      message
      errors {
        field
        messages
      }
    }
  }
`

const Contact = () => {
  const [sendSubmission, { data, loading, error }] = useMutation(CONTACT_MUTATION)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  console.log('data', data)
  console.log('loading', loading)
  console.log('error', error)

  return (
    <>
      <h1>Contact Page</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          console.log(e.target)
          // const name = e.target.name.value
          // const email
          // const message
          sendSubmission({ variables: { name, email, message } })
        }}
      >
        <fieldset className='flex flex-wrap'>
          <label className='w-full' htmlFor='name'>
            Name (required)
          </label>
          <input
            className='radius-4 rounded-md border-2'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            type='text'
          />
        </fieldset>
        <fieldset className='flex flex-wrap'>
          <label className='w-full' htmlFor='email'>
            Email (required)
          </label>
          <input
            className='radius-4 rounded-md border-2'
            onChange={(e) => setEmail(e.target.value)}
            required
            type='email'
          />
        </fieldset>
        <fieldset className='flex flex-wrap'>
          <label className='w-full' htmlFor='message'>
            Message (required)
          </label>
          <textarea
            className='radius-4 rounded-md border-2'
            onChange={(e) => setMessage(e.target.value)}
            required
            name='message'
            id='message'
          ></textarea>
        </fieldset>
        <button className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700' type='submit'>
          Submit
        </button>
      </form>
    </>
  )
}

export default Contact
