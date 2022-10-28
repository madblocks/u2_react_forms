import { useState } from 'react'
import './App.css';

function App() {

  const initialState = {
    issueType: '',
    subject: '',
    message: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
    // reset state to reset form
    setFormState(initialState)
  }

  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }

  return (
    <div className="App">
      <h2>Forms Introduction </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="issueType">Type of Issue:</label>
        <select id="issueType"
                onChange={handleChange}
                value={formState.issueType}>
          <option value="outage">Service Outage</option>
          <option value="billing">Billing Issue</option>
          <option value="cancel">Cancel Service</option>
        </select>
        <br/>
        <label htmlFor="subject">Subject</label>
        <input type="text" 
               id="subject"
               onChange={handleChange}
               value={formState.subject}></input>
               
        <br/>
        <label htmlFor="message">Message</label>
        <textarea id="message" 
                  cols="30" 
                  rows="10"
                  onChange={handleChange}
                  value={formState.message}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
