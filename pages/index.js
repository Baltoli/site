import PageHead from '../components/PageHead'
import TwoColumn from '../components/TwoColumn'

import Link from 'next/link'

const Profile = () => (
  <div>
    <img src="/static/me.jpg"/>
    <h1>bruce collie</h1>

    <style jsx>{`
      img {
        border-radius: 15%;
        display: block;
        margin: 0 auto;
        max-width: 70%;
        filter: drop-shadow(0 0 8px #AAA);
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
      of heterogenous accelerators and user code, giving compilers new techniques for optimising
      performance-sensitive workloads. Currently, my focus is on two-phase type-directed program
      synthesis as a way of learning the behaviour of black-box interfaces.
    </p>

    <p>
      In my free time I play rugby at <Link href='#'><a>Lismore RFC</a></Link>, and enjoy good food,
      good coffee and live music as much as I can.
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
