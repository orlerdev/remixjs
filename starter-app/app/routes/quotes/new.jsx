import { Link } from '@remix-run/react'
import { redirect } from '@remix-run/node'
import {db} from '~/utils/db.server'

export const action = async ({ request }) => {
  const form = await request.formData()
  const quoteText = form.get('quote')
  const quoteAuthor = form.get('author')

  const fields = { quoteText, quoteAuthor }

  const quote = await db.quote.create({ data: fields})

  return redirect(`/quotes/${quote.id}`)
}

export default function NewQuote() {
  return (
    <>
      <div className='page-header'>
        <h1>New Quote</h1>
        <Link to='/quotes' className='btn btn-reverse'>
          Back
        </Link>
      </div>

      <div className='page-content'>
        <form method='POST'>
          <div className='form-control'>
            <label htmlFor='quote'>Quote</label>
            <textarea name='quote' id='quote' />
          </div>
          <div className='form-control'>
            <label htmlFor='author'>Author</label>
            <input type='text' name='author' id='author' />
          </div>
          <button type='submit' className='btn btn-block'>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
