export const Card = ({ children }: { children: React.ReactNode }) => {
    const cardStyle = {
        padding: "24px",
        margin: "10px",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
        border: "1px solid #eee",
        borderRadius: "8px",
        backgroundColor: "white", // Helps distinguish from the dashboard background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%", // Ensures it fills the slot
        color: "black"
    };

    return <div style={cardStyle}> {children}</div>
}