import {Reviews} from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/reviews`;


const getReviews = async(id: string): Promise<Reviews> => {
    const res = await fetch(`${URL}/${id}`);
    return res.json();
}


export default getReviews;