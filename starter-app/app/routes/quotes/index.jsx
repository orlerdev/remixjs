import { useLoaderData, Link } from '@remix-run/react'
import { redirect } from '@remix-run/node'
import {db} from '~/utils/db.server'

export const action = () => {
  return redirect('/posts/new')
}

export const loader = async () => {
  return {
    quotes: await db.quote.findMany({
      take: 5,
      select: { id: true, quoteText: true, quoteAuthor: true },
      orderBy: { createdAt: 'desc' }
    })
  }
}

export default function QuoteItems() {
  const { quotes } = useLoaderData()

  return (
    <>
      <div className='page-header'>
        <h1>Quotes</h1>
        <Link to='/quotes/new' className='btn'>
          New Quote
        </Link>
      </div>
      <ul className='posts-list'>
        {quotes.map((quote) => (
          <li key={quote.id}>
            <Link to={quote.id}>
              <h3>{quote.quoteText}</h3>
              <p>{quote.quoteAuthor}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
