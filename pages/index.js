import PageHead from '../components/PageHead'
import TwoColumn from '../components/TwoColumn'
import Obfuscate from 'react-obfuscate'

import Link from 'next/link'

const Profile = () => (
  <div>
    <img src="/static/me.jpg"/>

    <style jsx>{`
      img {
        border-radius: 30px;
        display: block;
        margin: 0 auto;
        max-width: 75%;
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
      <a>Professor Michael O'Boyle</a></Link>. My primary research goal is to improve the integration
      of heterogenous accelerators and user code, giving compilers new techniques for optimising
      performance-sensitive workloads. Currently, my focus is on two-phase type-directed program
      synthesis as a way of learning the behaviour of black-box interfaces.
    </p>

    <p>
      In my free time I play rugby at <Link href='#'><a>Lismore RFC</a></Link>, and enjoy good food,
      coffee and live music as much as I can.
    </p>

    <style jsx>{`
      p {
      }
    `}</style>
  </div>
)

const ResumeItem = ({name, place, date, description}) => (
  <div>
    <li>
      <div className="placeTime">
        <span className="place">{place}</span> (<span className="date">{date}</span>)
      </div>
      <div className="degree">
        <span className="name">{name}</span>: <span className="description">{description}</span>
      </div>
    </li>

    <style jsx>{`
      .place {
        font-weight: bold;
      }

      .degree {
      }

      li {
        margin-top: 1.2em;
      }
    `}</style>
  </div>
)

const WorkLink = ({name, link}) => (
  <span>
    <Link href={link}><a>{name}</a></Link>
    <style jsx>{`
      a {
        text-transform: lowercase;
      }
      span {
        margin-left: 0.5em;
      }
    `}</style>
  </span>
)

const WorkItem = ({name, description, ...props}) => (
  <div>
    <li>
      <div className="info">
        <span className="name">{name}</span>
        {props.children}
      </div>

      <div>{description}</div>
    </li>
    <style jsx>{`
      li {
        margin-top: 1.2em;
      }

      .info {
      }

      .name {
        font-weight: bold;
      }
    `}</style>
  </div>
)

const ResumeList = ({align, title, ...props}) => (
  <div>
    <h2>{title}</h2>
    <ul>
      {props.children}
    </ul>

    <style jsx>{`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      div {
        text-align: ${align};
      }

      @media(max-width: 440px) {
        div {
          text-align: left;
        }
      }
    `}</style>
  </div>
)

const Education = () => (
  <ResumeList align='right' title='education'>
    <ResumeItem 
      name="PhD Pervasive Parallelism"
      place="University of Edinburgh"
      date="2018&ndash;"
      description="in progress"
    />

    <ResumeItem 
      name="MScR Pervasive Parallelism"
      place="University of Edinburgh"
      date="2017&ndash;18"
      description="Distinction"
    />

    <ResumeItem 
      name="MEng Computer Science"
      place="University of Cambridge"
      date="2016&ndash;17"
      description="Distinction"
    />

    <ResumeItem 
      name="BA Computer Science"
      place="University of Cambridge"
      date="2013&ndash;16"
      description={<span>1<sup>st</sup> Class</span>}
    />
  </ResumeList>
)

const Work = () => (
  <ResumeList align='left' title='work and projects'>
    <WorkItem
      name="Program Synthesis"
      description=""
    >
      <WorkLink 
        name="Github"
        link="https://github.com/baltoli/accsynt"
      />
      <WorkLink 
        name="Dissertation"
        link="static/msc.pdf"
      />
    </WorkItem>

    <WorkItem
      name="Static Analysis for TESLA"
      description=""
    >
      <WorkLink
        name="Github"
        link="https://github.com/cadets/tesla-static-analysis"
      />

      <WorkLink
        name="Dissertation"
        link="static/tesla.pdf"
      />
    </WorkItem>

    <WorkItem
      name="GoCardless"
      description=""
    >
      <WorkLink
        name="About"
        link="https://www.gocardless.com"
      />
    </WorkItem>

    <WorkItem
      name="PCL"
      description=""
    >
      <WorkLink
        name="Github"
        link="https://github.com/baltoli/pcl"
      />

      <WorkLink
        name="Dissertation"
        link="static/pcl.pdf"
      />
    </WorkItem>

    <WorkItem
      name="RealVNC"
      description=""
    >
      <WorkLink
        name="About"
        link="https://www.realvnc.com"
      />
    </WorkItem>

    <WorkItem
      name="Other"
      description=""
    >
    </WorkItem>
  </ResumeList>
)

const Index = () => (
  <div>
    <PageHead />

    <TwoColumn
      header={<h1>bruce collie</h1>}
      left={<Profile />}
      right={<AboutMe />}
      center={true}
    />

    <TwoColumn
      header={<h1>resume</h1>}
      left={<Education />}
      right={<Work />}
    />

    <style jsx>{`
    `}</style>
  </div>
)

export default Index
