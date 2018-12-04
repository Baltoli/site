const TwoColumn = ({header, left, right, center}) => (
  <div className="container">
    <div className="header">
      {header}
    </div>

    <div className="full-width">
      <div className="flex-grid">
        <div className="col">
          {left}
        </div>

        <div className="vr">
        </div>

        <div className="col">
          {right}
        </div>
      </div>
    </div>

    <style jsx>{`
      .vr {
        background-color: #EEE;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 1px;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        font-family: Raleway, sans-serif;
      }

      .flex-grid {
        display: flex;
        align-items: ${center ? 'center' : 'flex-start'};
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
        margin-bottom: 2em;
      }
      
      @media(max-width: 440px) {
        .flex-grid {
          display: block;
        }

        .full-width {
          border-radius: 0px;
        }

        .vr {
          position: relative;
          width: 100%;
          height: 1px;
        }
      }
    `}</style>
  </div>
)

export default TwoColumn
