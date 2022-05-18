import axios from "axios";
import useAsync from "./useAsync";

async function getUsers() {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
}

function Users() {
    const [state, fetchData] = useAsync(getUsers, []);

    const {loading, data: users, error} = state;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!!!</div>;
    if (!users) return null;
    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchData}>Reload</button>
        </>
    );
}

export default Users;