import axios from 'axios'

function InputForm() {
  let handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e.target.urlLink.value)
    axios.get()
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Url Link</label>
      <input type="text" name='urlLink'/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default InputForm