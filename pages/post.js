import Layout from '../components/MyLayout'
import {withRouter} from 'next/router'
import Markdown from 'react-markdown'

export default withRouter((props) => (
  <Layout>
    <h1>{props.router.query.title}</h1>
    <div className="markdown">
      <Markdown source={`
This is a blog post
Yes. Links [link](/link)

### Title
For some content
      `}/>
    </div>

    <style jsx global>{`
      .markdown {
        font-family: "Arial";
      }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </Layout>
))
