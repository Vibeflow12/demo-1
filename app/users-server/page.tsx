type User = {
    id: number,
    name: string,
    username: string;
    email: string;
    phone: string
};

export default async function UserServer() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await response.json();
    // return users;
    // console.log(users)
    return (
        <>
            <ul className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                {
                    users?.map((user) => (
                        <li key={user.id}
                            className=" m-2 p-4 border rounded-lg">
                            <div>{user.id}</div>
                            <div>{user.name}</div>
                            <div>{user.username}</div>
                            <div>{user.email}</div>
                            <div>{user.phone}</div>
                        </li>
                    ))
                }
            </ul>
        </>
    )

}

