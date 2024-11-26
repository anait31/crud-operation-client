
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from 'react';

function App() {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers)

  const handleDelete = id => {
    console.log(id)
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // deletedCount
        if(data.deletedCount > 0) {
          const remainingUsers = users.filter(user => user._id !== id);
          setUsers(remainingUsers);
        }
      })
  }

  return (
    <>
      <div className='max-w-6xl mx-auto border-2 rounded-lg mt-4'>
        <h1 className='text-center text-3xl font-semibold mt-8'>User Management Operation Client</h1>
        <div className='my-4'>
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* head */}
              <thead className=''>
                <tr>
                  <th>S/N</th>
                  <th className='text-start'>Name</th>
                  <th className='text-start'>Email</th>
                  <th className='text-start'>Country</th>
                  <th className='text-start'>Edit</th>
                  <th className='text-start'>Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                  users.map(user => <tr key={user._id}>
                    <th>0{users.indexOf(user) + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.country}</td>
                    <td><Link><button className='text-blue-400 ml-2'><FaEdit></FaEdit></button></Link></td>
                    <td><button onClick={() => handleDelete(user._id)} className='text-blue-400 ml-4'><MdDelete></MdDelete></button></td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          <div className='text-center mt-8'>
            <Link className='underline text-blue-400' to={'/addUsers'}>Add User</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
