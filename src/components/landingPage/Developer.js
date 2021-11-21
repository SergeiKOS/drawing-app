import { SiLinkedin, SiGithub, SiGoogleearth } from 'react-icons/si'

const Developer = ({ developer }) => {
  return (
    <article className="developer">
      <img src={developer.image} alt={`${developer.name} avatar`} width="200" />
      <h3>{developer.name}</h3>
      <p>{developer.description}</p>
      <a
        href="https://www.linkedin.com/in/serge-kos/"
        aria-label="Indeed account"
        rel="noopener noreferrer"
      >
        <SiLinkedin size={30} />
      </a>
      <a
        href="https://github.com/SergeiKOS"
        aria-label="GitHub account"
        rel="noopener noreferrer"
      >
        <SiGithub size={30} />
      </a>
      <a
        href="https://serge-k-portfolio.netlify.app/"
        aria-label="Personal website"
        rel="noopener noreferrer"
      >
        <SiGoogleearth size={30} />
      </a>
    </article>
  )
}

export default Developer
