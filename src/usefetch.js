import { useState, useEffect} from 'react';

const useFetch = (url) => {

	const [data, setData] = useState(null)
	const [isPending, setIspending] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const abortCont = new AbortController();
		setTimeout( () => {
			fetch(url, { signal: abortCont.signal})
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
			if(e.name === 'AbortError') {
				console.log('Fetch aborted')
			} else {
				setError(e.message)
				setIspending(false)
			}
		})
		},1000)
		return () => abortCont.abort();
	},[url]);
	return {data, isPending, error}
}

export default useFetch;