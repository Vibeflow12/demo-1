


export default function dashboard({
    children,
    user,
    about,
    notifications,
}: {
    children: React.ReactNode,
    user: React.ReactNode,
    about: React.ReactNode,
    notifications: React.ReactNode,
}) {
    return (
        <>
            <div>{children}</div>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>{user}</div>
                    <div>{about}</div>
                    <div >{notifications}</div>
                </div>
            </div>
        </>
    )
}
