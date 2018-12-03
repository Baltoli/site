const TwoColumn = ({left, right}) => (
  <div className="container">
    <div className="header">
    </div>

    <div className="flex-grid">
      <div className="col">
        {left}
      </div>

      <div className="col">
        {right}
      </div>
    </div>

    <style jsx>{`
      .container {
        max-width: 1200px;
        margin: 0 auto;
        font-family: Raleway, sans-serif;
      }

      .flex-grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }

      .col {
        flex: 1;
        margin: 1em;
      }
      
      @media(max-width: 440px) {
        .flex-grid {
          display: block;
        }
      }

      .header {
        width: 100%;
        text-align: center;
      }
    `}</style>
  </div>
)

export default TwoColumn
