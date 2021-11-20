import Nav from './Nav'
import Description from './Description'
import Title from './Title'
import Image from './Image'
import CreateSvg from './create.svg'
import SpecialFeaturesSvg from './special-features.svg'
import CustomFeaturesSvg from './custom-features.svg'

const LandingPage = () => {
  return (
    <div className="landing-page-wrapper">
      <h1 className="visually-hidden">Drawing superstar landing page</h1>
      <Nav />
      <section className="description-image-container">
        <Description>
          <Title title="Create" />
          Do you want to quickly draw something? Wheather it is a layout for
          your website or you just want to doodle a little bit, you can do it in
          this app.
        </Description>
        <Image svg={CreateSvg} alt="Create image" />
      </section>
      <section className="description-image-container">
        <Image svg={SpecialFeaturesSvg} alt="Special features image" />
        <Description>
          <Title title="Special features" />
          Very lightweight and fast. Without adds and simple to use.
        </Description>
      </section>
      <section className="description-image-container">
        <Description>
          <Title title="Custom features" />
          You want to see more features? Feel free to reach me out on
          <a
            href="https://serge-k-portfolio.netlify.app/#contact"
            rel="noopener noreferrer"
          >
            email
          </a>
          I will see what I can do.
        </Description>
        <Image svg={CustomFeaturesSvg} alt="Custom features image" />
      </section>
    </div>
  )
}

export default LandingPage
