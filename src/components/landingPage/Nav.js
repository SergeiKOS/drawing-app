import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navigation">
      <div>
        <div>Drawing superstar</div> <small>Simplify drawing!</small>{' '}
      </div>
      <Link to="/canvas">Get started</Link>
    </div>
  )
}

export default Nav
