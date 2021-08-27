function Pagination({ totalPages, handleClick, prev, next, page }) {
    const pages = [...Array(totalPages).keys()].map((item) => item + 1);

    console.log(totalPages);
    return (
        <>
            <button onClick={() => prev()} disabled={page <= 1}>
                Prev
            </button>
            {pages.map((num) => (
                <>
                    <button key={num} onClick={() => handleClick(num)}>
                        {num}
                    </button>
                </>
            ))}
            <button onClick={() => next()} disabled={page >= totalPages}>
                Next
            </button>
        </>
    );
}

export default Pagination;
