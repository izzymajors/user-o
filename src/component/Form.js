import React from 'react';


export default function Form(props){
    const {
        values,
        submit,
        change,
        disable,
        update,
    } =props;

    const onChange = evt => {
        const {name, values} = evt.target
        update (name, values)
    }
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>

            <h2>USER</h2>


                <label>name
                    <input 
                    type='text'
                    name='name'
                    onChange={onChange}
                    values={values.name}
                    />
                   </label>

                   

                   <label>email
                       <input
                       type='email'
                       email='email'
                       onChange={onChange}
                       value={values.email}
                       placeholder='Type an Email'
                       />
                     </label>

                     <label>password
                        
                             <input
                             type='password'
                             password='password'
                             value={values.password}
                             onChange={onChange}
                             placeholder='Type Password'
                            
                             />
                            

                              </label>

                             

                              <label>terms
                             
                                  <input
                                  type='checkbox'
                                  name='terms and conditions'
                                  checked={false}
                                  onChange={onChange}
                                  onClick={onChange}
                                  
                                  />

                           


                              </label>
        
                    </div>
                    <div className='submit'>
                        <button>Submit</button>

                    </div>
                </form>
               
    )
}

