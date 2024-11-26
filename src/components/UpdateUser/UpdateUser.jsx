import { Link, useLoaderData } from "react-router-dom";

const UpdateUser = () => {
    const loadedUser = useLoaderData();
    const { _id, name, email, country } = loadedUser;
    // console.log(loadedUser)
    const handleUpdateUser = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const country = form.country.value;
        const updatedUser = {name, email, country};
        // console.log(updatedUser);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
    }
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-secondary text-3xl font-semibold mt-8">Update Users</h2>
            <form onSubmit={handleUpdateUser} className="w-1/3 mx-auto mt-8 space-y-4">
                <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    className="input input-bordered input-secondary focus:outline-none w-full px-4 py-2" />
                <input
                    type="text"
                    name="email"
                    defaultValue={email}
                    className="input input-bordered input-secondary focus:outline-none w-full px-4 py-2" />
                <input
                    type="text"
                    name="country"
                    defaultValue={country}
                    className="input input-bordered input-secondary focus:outline-none w-full px-4 py-2" />
                <button className="btn btn-secondary btn-block">Update User</button>
            </form>
            <div className="text-center mt-4">
                <Link className="underline text-blue-400" to={'/'}>Go to Home</Link>
            </div>
        </div>
    );
};

export default UpdateUser;