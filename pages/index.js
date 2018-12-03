import PageHead from '../components/PageHead'
import TwoColumn from '../components/TwoColumn'

import Link from 'next/link'

const Profile = () => (
  <div>
    <img src="https://via.placeholder.com/400"/>
    <h1>bruce collie</h1>

    <style jsx>{`
      img {
        border-radius: 50%;
        display: block;
        margin: 0 auto;
        max-width: 50%;
        filter: drop-shadow(0 0 8px #BBB);
      }

      h1 {
        text-align: center;
      }
    `}</style>
  </div>
)

const AboutMe = () => (
  <div>
    <h2>about me</h2>
    <p>
      I am a first-year PhD student at the University of Edinburgh, supervised by <Link href='#'>
      <a>Professor Mike O'Boyle</a></Link>. My primary research goal is to improve the integration
      of heterogenous accelerators with user code.
    </p>

    <p>
    </p>

    <style jsx>{`
      p {
      }
    `}</style>
  </div>
)

const Index = () => (
  <div>
    <PageHead />
    <TwoColumn
      left={<Profile />}
      right={<AboutMe />}
    />

    <style jsx>{`
    `}</style>
  </div>
)

export default Index
