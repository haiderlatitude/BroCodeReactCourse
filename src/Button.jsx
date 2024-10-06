function Button () {
    const styles = {
            border: "1px solid hsl(0, 0%, 80%)",
            borderRadius: "10px",
            boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            margin: "10px",
            textAlign: "center",
            maxWidth: "250px",
            display: "inline-block",
            cursor: "pointer"
        }
        
    return (
        <button style={styles}>
            Click Me!
        </button>
    );
}

export default Button;