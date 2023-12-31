import { useState } from 'react';

let sn = 0; 

const ArrayList= (props) => {
  const [name, setName] = useState('');
  const [lists, setLists] = useState([]);

  return (
    <>
      <h1>Write down any list</h1>
      <input 
      value={name}  
      onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setLists([...lists, { id: sn++, name: name }
        ]);setName("")
      }}>Add a list </button>
      <ul>
        {lists.map(list => (
          <li key={list.id}>{list.name}</li>

        ))}
      </ul>
    </>
  );
};

ArrayList.propTypes = {};


export default ArrayList;

