import logo from './logo.svg';
import './App.css';
import Form from './component/Form'
import React, {useState, useEffect}from 'react'
import axios from 'axios'
import * as yup from 'yup'
import schema from './validations/schemaForm'


const initalFormValues = {
  name: '',
  email:'',
  terms:'false',

}

const initalFormErrors = {
  username:'',
  email:'',
  
}

const initalUser = []
const initalDisabled = true;

function App() {

  const [user, setUser] = useState(initalUser)
  const [formValues, setFormValues] = useState(initalFormValues)
  const [formErrors, setFormErrors] = useState(initalFormErrors)
  const [disable, setDisable] = useState(initalDisabled)


  const getUser = () =>{
    axios
    .get('https://reqres.in/api/users')
    .then((res) =>{
      setUser(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

const postGetUser = newUser => {
  axios
  .push('https://reqres.in/api/users', newUser)
  .then(res =>{
    setUser([res.data,...user]);
    setFormValues(initalFormValues);
  })
  .catch(err => {
    console.log(err)
  })
}

const inputChange = (name, value) => {
 
  yup
  .reach(schema, name)
  .validate(value)
  .then(()=> {
    setFormErrors({
      ...formErrors,
      [name]:'',
    })
    .catch(err =>{
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      })
    })
  })

  setFormValues({
    ...formValues,
    [name]: value 
  })
}



  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue,

    })

  }

  const submitForm = (evt) => {
    evt.preventDefault();
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      terms: formValues.terms
    }
    if (newUser.name || newUser.email || newUser.terms){

    }
    // postGetUser(newUser)
    setUser([...user, newUser]);
    setFormValues(initalFormValues);
  }
  

  // useEffect(() => {
  //   getUser()
  // }, [])

  // useEffect(() => {
  //   // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
  //   schema.isValid(formValues).then(valid => {
  //     setDisabled(!valid)
  //   })
  // }, [formValues])


  return (
    <div className="App">
      <h1>Member List</h1>
      <Form
      values={formValues}
      update={updateForm} 
      submit={submitForm}
      />
      {
      user.map((user) => {
        return(
          <Form key={user.id} details={user}/>
        )

      })
    }
    </div>
  );
}

export default App;
