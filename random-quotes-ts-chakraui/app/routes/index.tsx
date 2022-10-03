import { useState } from 'react'
import { useLoaderData } from '@remix-run/react'
import {
  Box,
  Flex,
  Text,
  Button,
  ButtonGroup,
  Icon
} from '@chakra-ui/react'
import { FaTwitter } from 'react-icons/fa'

export const loader = () => {
  return {
    quotes:
      [
        {
          quoteText: 'All our dreams can come true, if we have the courage to pursue them.',
          quoteAuthor: 'Walt Disney'
        },
        {
          quoteText: 'The secret of getting ahead is getting started.',
          quoteAuthor: 'Mark Twain'
        },
        {
          quoteText: 'I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life, and that is why I succeed.',
          quoteAuthor: 'Michael Jordan'
        },
        {
          quoteText: 'The best time to plant a tree was 20 years ago. The second best time is now.',
          quoteAuthor: 'Chinese Proverb'
        },
        {
          quoteText: 'It’s hard to beat a person who never gives up.',
          quoteAuthor: 'Babe Ruth'
        },
        {
          quoteText: 'You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.',
          quoteAuthor: 'William W. Purkey'
        },
        {
          quoteText: 'Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.',
          quoteAuthor: 'Socrates'
        },
        {
          quoteText: 'Whatever you are, be a good one.',
          quoteAuthor: 'Abraham Lincoln'
        },
        {
          quoteText: 'If something is important enough, even if the odds are stacked against you, you should still do it.',
          quoteAuthor: 'Elon Musk'
        },
        {
          quoteText: 'Hold the vision, trust the process.',
          quoteAuthor: 'Unknown'
        },
        {
          quoteText: 'One day or day one. You decide.',
          quoteAuthor: 'Unknown'
        },
        {
          quoteText: 'Work like there is someone working 24 hours a day to take it away from you.',
          quoteAuthor: 'Mark Cuban'
        },
        {
          quoteText: 'Hustle in silence and let your success make the noise.',
          quoteAuthor: 'Unknown'
        },
        {
          quoteText: 'Some people want it to happen, some wish it would happen, others make it happen.',
          quoteAuthor: 'Michael Jordan'
        },
        {
          quoteText: 'Great things are done by a series of small things brought together.',
          quoteAuthor: 'Vincent Van Goh'
        },
        {
          quoteText: 'If you hire people just because they can do a job, they’ll work for your money. But if you hire people who believe what you believe, they’ll work for you with blood and sweat and tears.',
          quoteAuthor: 'Simon Sinek'
        },
        {
          quoteText: 'Keep your eyes on the stars, and your feet on the ground.',
          quoteAuthor: 'Theodore Roosevelt'
        },
        {
          quoteText: 'Wake up determined, go to bed satisfied.',
          quoteAuthor: 'Dwayne Johnson'
        },
        {
          quoteText: 'The best way to appreciate your job is to imagine yourself without one.',
          quoteAuthor: 'Oscar Wilde'
        },
        {
          quoteText: 'The miracle is not that we do this work, but that we are happy to do it.',
          quoteAuthor: 'Mother Teresa'
        }
      ]
  }
}

export default function QuoteCard(): JSX.Element {
  const { quotes } = useLoaderData()
  const random: number = Math.floor(Math.random() * quotes.length)
  const [quote, setQuote] = useState(quotes[random].quoteText)
  const [author, setAuthor] = useState(quotes[random].quoteAuthor)

  function randomQuote(): void {
    const index: number = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[index].quoteText)
    setAuthor(quotes[index].quoteAuthor)
    console.log(quote, author)
  }

  return (
    <>
      <Box id='quote-box' className='quote-box' maxW='100%'>
        <Flex flexDirection='column' m='40px' maxW='35%' boxShadow='2xl' rounded='lg' mx='auto' bg='blue.900' color='white' p='20px'>
          <Text textAlign='center' fontSize='4xl' id='quote' w='100%' mx='auto'>"{quote}"</Text>
          <Text textAlign='right' fontSize='2xl' id='author'>- {author}</Text>
          <ButtonGroup alignSelf='center' variant='outline' spacing='6'>
            <Button id='new-quote' colorScheme='whiteAlpha' variant='outline' size='lg' onClick={randomQuote}>New Quote</Button>
            <a id='tweet-quote' href='https://www.twitter.com/intent/tweet' target='_blank' rel='noreferrer' className='twitter-share-button'><Button size='lg' colorScheme='whiteAlpha' variant='solid' leftIcon={<Icon as={FaTwitter} />}>Tweet Quote</Button></a>
          </ButtonGroup>
        </Flex>
      </Box>
    </>
  )
}


