import React from 'react';
import useForm from 'react-hook-form'

const adduser = () => {
  const {register, handleSubmit, errors}=useForm();

const onSubmit = (data) => {
  console.log(data);  //!
}

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='name' name='name' ref={register}/>
        <input type="email" placeholder='email' name='email' ref={register}/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default adduser