const Footer = ({ length }) => {
        const today = new Date();

    return (
        <footer>
            <p>Copyright &copy; {today.getFullYear()}</p>
            <br />
            <p>{length} list {length === 1 ? 'item' : "items"}</p>
        </footer>
    )
};

export default Footer