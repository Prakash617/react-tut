import React, { useState } from "react";

const Form = () => {
    const [input, setInputs] = useState({})

    const handleChange =(e)=>{
       const name = e.target.name;
       const value = e.target.type === 'checkbox'? e.target.checked : e.target.value;
    //    setInputs(values => ({...values, [name]: value}))

       setInputs({...input, [name]: value })


    };

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(input)

        alert( JSON.stringify(input))
        // alert( (input))


    };


  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={input.email || ''}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleChange}
            value={input.password || ''}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            name="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={handleChange}
            value={input.checked || ''}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit"  value="Submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
