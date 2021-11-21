import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navigation">
      <div className="navigation-wrapper">
        <div>
          <div>Drawing superstar</div> <small>Simplify drawing!</small>
        </div>
        <Link to="/canvas">Get started</Link>
      </div>
    </div>
  )
}

export default Nav
