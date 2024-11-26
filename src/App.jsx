
import { Link } from 'react-router-dom'
import './App.css'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {

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
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                  <td><Link><button className='text-blue-400 ml-2'><FaEdit></FaEdit></button></Link></td>
                  <td><button className='text-blue-400 ml-4'><MdDelete></MdDelete></button></td>
                </tr>
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
