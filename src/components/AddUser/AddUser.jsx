import { Link } from "react-router-dom";

const AddUser = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-secondary text-3xl font-semibold mt-8">Add Users</h2>
            <form className="w-1/3 mx-auto mt-8 space-y-4">
                <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered input-secondary focus:outline-none w-full px-4 py-2" />
                <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered input-secondary focus:outline-none w-full px-4 py-2" />
                <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered input-secondary focus:outline-none w-full px-4 py-2" />
                <button className="btn btn-secondary btn-block">Add User</button>
            </form>
            <div className="flex gap-4 justify-center mt-4">
                <div className="">
                    <Link className="underline text-blue-400" to={'/'}>Go to Home</Link>
                </div>
                <div>
                    <Link className="underline text-blue-400" to={'/updateUsers'}>Go to Update</Link>
                </div>
            </div>
        </div>
    );
};

export default AddUser;