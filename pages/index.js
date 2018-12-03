import PageHead from '../components/PageHead'
import TwoColumn from '../components/TwoColumn'

import Link from 'next/link'

const Left = () => (
  <div>
    <p>Left col</p>
  </div>
)

const Right = () => (
  <div>
    <p>Right col</p>
  </div>
)

const Index = () => (
  <div>
    <PageHead />
    <TwoColumn
      left={<Left />}
      right={<Right />}
    />
  </div>
)

export default Index
