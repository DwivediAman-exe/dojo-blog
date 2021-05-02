import { Link } from "react-router-dom"

const NotFound = () => {
	return ( 
		<div className="not-found">
			<h2>Sorry</h2>
			<p>That Page can not be Found</p>
			<div className="l">
				<Link to='/'>Back to Homepage..</Link>
			</div>
			
		</div>
	 );
}
 
export default NotFound;