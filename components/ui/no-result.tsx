import { NextPage } from 'next'

interface Props {}

const NoResults: NextPage<Props> = ({}) => {
  return (
    <div className='flex justify-center items-center h-full w-full text-neutral-500'>
        No results found.
    </div>
  );
}

export default NoResults