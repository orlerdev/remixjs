import { Link, useLoaderData } from '@remix-run/react'
import { redirect } from '@remix-run/node'
import { db } from '~/utils/db.server'

export const loader = async ({ params }) => {
  const quote = await db.quote.findUnique({
    where: { id: params.quoteId }
  })

  if (!quote) throw new Error('Quote not found')

  const data = { quote }
  return data
}

export const action = async ({ request, params }) => {
  const form = await request.formData()
  if (form.get('_method') === 'delete') {
    const quote = await db.quote.findUnique({
      where: { id: params.quoteId }
    })

    if (!quote) throw new Error('Quote not found')

    await db.quote.delete({ where: { id: params.quoteId } })
    return redirect('/quotes')
  }
}
export default function Quote() {
  const { quote } = useLoaderData()

  return (
    <div>
      <div className='page-header'>
        <h3>{quote.quoteText}</h3>
        <Link to='/quotes' className='btn btn-reverse'>
          Back
        </Link>
      </div>
      <div className='page-content'>
        <p>{quote.quoteAuthor}</p>
      </div>
      <div className='page-footer'>
        <form method='POST'>
          <input type='hidden' name='_method' value='delete' />
          <button className='btn btn-delete'>Delete</button>
        </form>
      </div>
    </div>
  )
}
