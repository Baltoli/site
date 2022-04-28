import Link from 'next/link'
import Obfuscate from 'react-obfuscate'

import PageHead from '../components/PageHead'
import TwoColumn from '../components/TwoColumn'

const Profile = () => (
  <div>
    <img src="/static/me.jpg"/>

    <style jsx>{`
      img {
        border-radius: 30px;
        display: block;
        margin-left: auto;
        max-width: 75%;
        filter: drop-shadow(0 0 8px #BBB);
      }

      h1 {
        text-align: center;
      }

      @media(max-width: 600px) {
        img {
          max-width: 100%;
          margin: 0 auto;
        }
      }
    `}</style>
  </div>
)

const AboutMe = () => (
  <div>
    <h2>about me</h2>
    <p>
      I am a compiler engineer at <Link
      href='https://runtimeverification.com/'><a>Runtime Verification</a></Link>,
      where I work on developing the <Link href='https://kframework.org/'><a>K
      Framework</a></Link>, as well as formally verified language implementations in K.
    </p>

    <p>
      Previously, I completed a PhD at the University of Edinburgh, supervised by
      <Link href='http://www.dcs.ed.ac.uk/home/mob/'><a>Professor Michael O'Boyle</a></Link>.
      My primary research goal was to improve the integration
      of heterogenous accelerators and user code, giving compilers new techniques for optimising
      performance-sensitive workloads. My research focused on two-phase type-directed program
      synthesis as a way of learning the behaviour of black-box interfaces.
    </p>

    <p>
      In my free time I play rugby at <Link href='https://twitter.com/LismoreRFC'><a>Lismore RFC</a></Link>, and enjoy good food,
      coffee and live music as much as I can.
    </p>

    <h2>contact</h2>
    <p>
      You can email me at <Obfuscate email="bruce.collie@runtimeverification.com" />, and all
      my code is on <Link href="https://github.com/baltoli"><a>Github</a></Link>.
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
        <span className="name">{name}</span><span className="description">{description}</span>
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
        margin-left: 0.75em;
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

      @media(max-width: 600px) {
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
      date="2018&ndash;2022"
    />

    <ResumeItem 
      name="MScR Pervasive Parallelism"
      place="University of Edinburgh"
      date="2017&ndash;18"
      description=": Distinction"
    />

    <ResumeItem 
      name="MEng Computer Science"
      place="University of Cambridge"
      date="2016&ndash;17"
      description=": Distinction"
    />

    <ResumeItem 
      name="BA Computer Science"
      place="University of Cambridge"
      date="2013&ndash;16"
      description={<span>: 1<sup>st</sup> Class</span>}
    />
  </ResumeList>
)

const ResearchItem = ({award, venue, title, type, link, date, pdf, slides, ieee, acm, video}) => {
  let awardText;
  let pdfLink;
  let slidesLink;
  let ieeeLink;
  let acmLink;
  let videoLink;

  if(award !== undefined) {
    awardText = <span>{award}</span>;
  } else {
    awardText = <></>
  }

  if(pdf !== undefined) {
    pdfLink = <WorkLink name="pdf" link={pdf} />
  } else {
    pdfLink = <></>
  }

  if(slides !== undefined) {
    slidesLink = <WorkLink name="slides" link={slides} />
  } else {
    slidesLink = <></>
  }

  if(ieee !== undefined) {
    ieeeLink = <WorkLink name="IEEE" link={ieee} />
  } else {
    ieeeLink = <></>
  }

  if(acm !== undefined) {
    acmLink = <WorkLink name="ACM" link={acm} />
  } else {
    acmLink = <></>
  }

  if(video !== undefined) {
    videoLink = <WorkLink name="video" link={video} />
  } else {
    videoLink = <></>
  }

  return (
    <div>
      <li>
        <div className="title">
          {title}
        </div>
        <div className="info">
          {type} at <Link href={link}><a>{venue} {date}</a></Link>
          {acmLink}
          {ieeeLink}
          {pdfLink}
          {slidesLink}
          {videoLink}
        </div>
        <div className="award">
          {awardText}
        </div>
      </li>

      <style jsx>{`
        .title {
          font-weight: bold;
        }

        li {
          margin-top: 1.2em;
        }
        
        .award {
          font-variant: small-caps;
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}

const Research = () => (
  <ResumeList align='right' title='research'>
    <ResearchItem
      title=<span>
        <span className="line">Program Lifting using Gray-Box Behavior</span>
      </span>

      type="Conference Paper"
      venue="PACT" date="2021"
      link="http://pact21.snu.ac.kr/"
      pdf="static/pact21.pdf"
    />

    <ResearchItem
      title=<span>
        <span className="line">Modeling Black-Box Components</span>
        <span className="line">&nbsp;with Probabilistic Synthesis</span>
      </span>

      award="best paper"
      type="Conference Paper"
      venue="GPCE" date="2020"
      link="https://conf.researchr.org/home/gpce-2020"
      pdf="static/gpce.pdf"
      acm="https://dl.acm.org/doi/10.1145/3425898.3426952"
    />

    <ResearchItem
      title=<span>
        <span className="line">M<sup>3</sup>: Semantic API Migration</span>
      </span>

      type="Conference Paper"
      venue="ASE" date="2020"
      link="https://conf.researchr.org/home/ase-2020"
      pdf="static/ase.pdf"
      ieee="https://ieeexplore.ieee.org/abstract/document/9286032"
    />

    <ResearchItem
      title=<span>
        <span className="line">Retrofitting Symbolic Holes to LLVM IR</span>
      </span>

      type="Workshop Presentation"
      venue="TyDe" date="2020"
      link="https://icfp20.sigplan.org/home/tyde-2020"
      pdf="static/tyde20.pdf"
      video="https://www.youtube.com/watch?v=8XiFMk-_bhw"
    />

    <ResearchItem
      title=<span>
        <span className="line">Automatically Harnessing Sparse Acceleration</span>
      </span>

      type="Conference Paper"
      venue="CC" date="2020"
      link="https://conf.researchr.org/home/CC-2020"
      pdf="static/cc.pdf"
      acm="https://dl.acm.org/doi/10.1145/3377555.3377893"
    />

    <ResearchItem
      title=<span>
        <span className="line">Type-Directed Program Synthesis</span>
        <span className="line">&nbsp;and Constraint Generation for Library Portability</span>
      </span>

      type="Conference Paper"
      venue="PACT" date="2019"
      link="https://hpc.pnl.gov/pact19/"
      pdf="static/pact.pdf"
      slides="static/pact_slides.pdf"
      ieee="https://ieeexplore.ieee.org/document/8891611"
    />

    <ResearchItem
      title=<span>
        <span className="line">Augmenting Type Signatures</span>
        <span className="line">&nbsp;for Program Synthesis</span>
      </span>

      type="Workshop Presentation"
      venue="TyDe" date="2019"
      link="https://icfp19.sigplan.org/home/tyde-2019"
      pdf="static/tyde.pdf"
      slides="static/tyde_slides.pdf"
    />

    <style jsx>{`
      span.line {
        display: inline-block;
      }
    `}</style>
  </ResumeList>
)

const Work = () => (
  <ResumeList align='left' title='work and projects'>
    <WorkItem
      name="Runtime Verification"
      description="
        At RV, my work focuses on the development of compiler tooling for the K framework (in
        particular, the LLVM K backend intended for high-performance concrete execution of
        programs). Additionally, I have contributed to a standards-compliant K implementation of the C
        language.
      "
    >
      <WorkLink
        name="about"
        link="https://runtimeverification.com"
      />
      <WorkLink
        name="k github"
        link="https://github.com/kframework/"
      />
    </WorkItem>
    <WorkItem
      name="Program Synthesis"
      description="
        The main focus of MScR and PhD was the development of program synthesis
        techniques that aim to learn the behaviour of black-box interfaces. My
        approach initially used two-phase synthesis driven by type heuristics to synthesise
        complex control flow, with later work examining additional sources of information to drive synthesis in real-world contexts.
      "
    >
      <WorkLink 
        name="Github"
        link="https://github.com/baltoli/accsynt"
      />
      <WorkLink 
        name="MSC Dissertation"
        link="static/msc.pdf"
      />
      <WorkLink 
        name="PhD Thesis"
        link="static/thesis.pdf"
      />
    </WorkItem>

    <WorkItem
      name="TESLA"
      description="
        During my MEng I contributed to TESLA, an existing project that allows for temporal
        assertions to be added to C programs and checked at runtime. I used model-checking
        to prove that individual assertions could be safely removed, improving the performance
        of programs using TESLA.
      "
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
      description="
        At GoCardless I was a member of the Core Payments team, responsible for developing
        the infrastructure used by the company to process Direct Debit transactions. I
        investigated bugs, contributed to new features, and worked on upgrading legacy code.
      "
    >
      <WorkLink
        name="About"
        link="https://www.gocardless.com"
      />
    </WorkItem>

    <WorkItem
      name="PCL"
      description="
        My undergraduate final project was an implementation of the &pi;-calculus, a minimal
        expression of concurrent message-passing semantics. I developed a compiler and virtual
        machine for this language, as well as a library of example programs demonstrating its
        usage.
      "
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
      description="
        At RealVNC I developed a prototype implementation of Apple's CarPlay software to run
        on the company's internal in-car entertainment platform. This involved writing kernel
        modules and patches for the Linux kernel's USB subsystem, as well as a driver for the
        CarPlay protocol.
      "
    >
      <WorkLink
        name="About"
        link="https://www.realvnc.com"
      />
    </WorkItem>

    <WorkItem
      name="Other"
      description="
        In 2015 I was responsible for managing the website, ticketing system and admissions for
        the Trinity Hall June Event, attended by roughly 2000 guests. I have also worked as a
        freelance iOS and backend developer on a number of projects.
      "
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
      left={<div><Research /><Education /></div>}
      right={<Work />}
    />

    <style jsx>{`
    `}</style>
  </div>
)

export default Index
