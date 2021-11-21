import Nav from './Nav'
import Description from './Description'
import Title from './Title'
import Image from './Image'
import Developer from './Developer'
import SergeAvatar from './serge-avatar.jpg'
import CreateSvg from './create.svg'
import SpecialFeaturesSvg from './special-features.svg'
import CustomFeaturesSvg from './custom-features.svg'

const LandingPage = () => {
  return (
    <>
      <Nav />
      <div className="landing-page-wrapper">
        <h1 className="visually-hidden">Drawing superstar landing page</h1>
        <section className="description-image-container">
          <Description>
            <Title title="Create" />
            Do you want to quickly draw something? Whether it is a layout for
            your website or you just want to doodle a little bit, you can do it
            in this app.
          </Description>
          <Image svg={CreateSvg} alt="Create image" />
        </section>
        <section className="description-image-container">
          <Image svg={SpecialFeaturesSvg} alt="Special features image" />
          <Description>
            <Title title="Special features" />
            Very lightweight and fast. Without ads and simple to use. Works on
            touch devices as well. Lighthouse result 99 100 100 100.
          </Description>
        </section>
        <section className="description-image-container">
          <Description>
            <Title title="Custom features" />
            Do you want to see more features? Feel free to reach out by
            <a
              className="email-link"
              href="https://serge-k-portfolio.netlify.app/#contact"
              rel="noopener noreferrer"
            >
              email.
            </a>
            I will see what I can do.
          </Description>
          <Image svg={CustomFeaturesSvg} alt="Custom features image" />
        </section>
        <Developer
          developer={{
            name: 'Serge Kostrikin',
            image: SergeAvatar,
            description:
              'An energetic front-end developer with passion for building responsive websites and apps to the very highest standards. Always make an effort to create more accessible websites for users and more readable code for developers.',
          }}
        />
      </div>
      <footer>&copy; Serge Kostrikin</footer>
    </>
  )
}

export default LandingPage
