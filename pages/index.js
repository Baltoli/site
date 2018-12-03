import Layout from '../components/MyLayout'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <Layout>
    <h1>A Blog</h1>
    <ul>
      <PostLink id="hello" title="Hello Next.js" />
      <PostLink id="learn" title="Learning funm" />
      <PostLink id="another" title="Another title here" />
    </ul>
  </Layout>
)

export default Index
