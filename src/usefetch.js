import { useState, useEffect} from 'react';

const useFetch = (url) => {

	const [data, setData] = useState(null)
	const [isPending, setIspending] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		fetch(url)
		.then(res => {
			if(!res.ok) {
				throw Error('Could not fetch the data from the sever !')
			}
			return res.json()
		})
		.then((data) => {
			setData(data)
			setIspending(false)
			setError(null)
		})
		.catch((e) => {
			setError(e.message)
			setIspending(false)
		} )
	},[url]);
	return {data, isPending, error}
}

export default useFetch;