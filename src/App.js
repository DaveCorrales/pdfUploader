import React from 'react';
import './app.css';

function App() {
  return (
    <div className="container">
      {/* header */}
      <h1 className="display-4 text-center text-danger">Quiz App</h1>
      {/* subtitle */}
      <p className="lead text-center mb-4">Get started with best quiz's</p>
      <div className="custom-file">
        <form className="mt-4">
          {/* custom file input */}
          <label className="custom-file-label" htmlFor="customFile">Choose file</label>
          <input type="file" className="custom-file-input" id="customFile" />
          {/* Submit button */}
          <div className="text-center">
          <input type="submit" className="btn btn-danger mt-3" value="Add quiz" />
          </div>
        </form>
      </div>

      {/*make an example clickable box for pdfs to open */}
      <div className="row" style={{ marginTop: '100px' }}>
        <div className="col-sm-3" style={{marginTop: '10px'}}>
          <div style={{
            border: '1px solid black',
            width: '100%',
            height: '100%',
            padding: '20px'
          }}>
            Clickable Example Text
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
