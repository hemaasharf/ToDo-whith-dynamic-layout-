import { useState } from 'react';
const FormEdit = ({ task, setShow, showFrom, onEdit}) => {
  const [title, setTitle] = useState(task.name);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit( title, task.id)
    setShow(!showFrom)
  };

  return (
    
    <form onSubmit={handleSubmit} >
      <input value={title} onChange={handleChange} />
      <button >Save</button>
    </form>
    
  );
}


export default FormEdit;