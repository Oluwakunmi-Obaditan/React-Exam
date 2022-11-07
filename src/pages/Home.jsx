import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container tab">
      <h1>Do you want to be a baller and not a mechanic</h1>
    <p>Do you want to live a soft-life and be a baller, well the only way around it is to work hard, there is no easy way to success.</p>
    <Link to="/signup" className="btn primary">Apply Now</Link>  
    </div>
  )
}
 export default Home