function Ndcreate() {

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h2>Kolt paspirtukų nuoma</h2>
      </div>
      <div className="card-body">
        <div className="form-group">
          <label>ID</label>
          <input type="text" className="form-control" />
          <small className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <button type="button" className="btn btn-outline-warning">Create</button>
      </div>
    </div>
  )
}
export default Ndcreate;