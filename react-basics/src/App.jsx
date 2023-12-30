import { useState } from 'react';
import './App.css';

function App() {
   let globalId = 1;
   const [todos, setTodos] = useState([]);
   const [title, setTitle] = useState('');
   const [desc, setDesc] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();

      setTodos([
         ...todos,
         {
            id: globalId++,
            title,
            desc,
         },
      ]);
   };

   return (
      <div className='wrapper'>
         <div className='todoInput'>
            <form action=''>
               <input
                  type='text'
                  placeholder='Title'
                  onChange={(e) => setTitle(e.target.value)}
               />
               <input
                  type='text'
                  placeholder='Description'
                  onChange={(e) => setDesc(e.target.value)}
               />
               <button onClick={handleSubmit}>Add</button>
            </form>
         </div>
         <div className='todoList'>
            {todos.map((todo) => (
               <div className='todoHolder'>
                  <h1 className='titleText'>{todo.title}</h1>
                  <span className='descText'>{todo.desc}</span>
               </div>
            ))}
         </div>
      </div>
   );
}

export default App;
