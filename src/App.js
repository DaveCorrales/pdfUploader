import React from 'react';
import './app.css';

function App() {
  return (
    <div className="App">
      <div class = "container">
        <h1 class="display-2 center">Quiz App</h1>
        <p class="lead center pl-5 mb-4">Get started with best quizes</p>
      
      </div>



      <div class = "custom-file">
        <input type = "file" class = "custom-file-input" id = "customFile"></input>
        <label class ="custom-file-label" for="customFile">Choose file</label>
        <button class = "btn btn-danger">Add quiz</button>
      </div>

      
      {/*This is basically html. Add code in between the div */}
      
    </div>
  );
}

export default App;
