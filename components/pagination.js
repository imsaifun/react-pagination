function Pagination({ totalPages, handleClick }) {
    const pages = [...Array(totalPages).keys()].map((item) => item + 1);
    return (
        <>
            {pages.map((num) => (
                <button key={num} onClick={() => handleClick(num)}>
                    {num}
                </button>
            ))}
        </>
    );
}

export default Pagination;
