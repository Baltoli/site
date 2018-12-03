const TwoColumn = ({left, right}) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm">
        {left}
      </div>

      <div className="col-sm">
        {right}
      </div>
    </div>
  </div>
)

export default TwoColumn
