const TwoColumn = ({left, right}) => (
  <div className="container">
    <div className="header">
      <h1>bruce collie</h1>
    </div>

    <div className="full-width">
      <div className="flex-grid">
        <div className="col">
          {left}
        </div>

        <div className="col">
          {right}
        </div>
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

      .header {
        width: 100%;
        text-align: center;
      }

      .full-width {
        border-radius: 30px;
        background-color: #FAFAFA;
        padding: 1em;
        filter: drop-shadow(0 0 8px #DDD);
      }
      
      @media(max-width: 440px) {
        .flex-grid {
          display: block;
        }

        .full-width {
          border-radius: 0px;
        }
      }
    `}</style>
  </div>
)

export default TwoColumn
