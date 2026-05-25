"use client"

import { useEffect, useState } from "react";

type User = {
    id: number,
    name: string,
    username: string;
    email: string;
    phone: string
};

export default function UserClient() {
    const [user, setUser] = useState<User[] | null>(null)
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState<Error | null>(null)

    useEffect(() => {
        const detail = async () => {
            try {
                setLoading(true)
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                const users = await response.json();
                setUser(users);
            } catch (error) {
                console.error("ERROR: ", error)
                if (error instanceof Error) {
                    setErr(error as Error);
                }
            } finally {
                setLoading(false)
            }
        }
        detail()
    }, [])

    if (loading) return <div>Loading...</div>
    if (err) return <div>{err.message}</div>

    return (
        <>
            <ul className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                {
                    user?.map((user) => (
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