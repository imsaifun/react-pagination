import { useEffect, useState } from "react";
import axios from "axios";
import Users from "./../components/users";
import Pagination from "../components/pagination";
import { USER_PER_PAGE } from "../utails/constants";

function Home() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(0);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            const res = await axios.get(
                "https://randomuser.me/api/?page=1&results=50&nat=us"
            );
            setLoading(false);
            setUsers(res.data.results);

            setTotalPages(Math.ceil(res.data.results.length / USER_PER_PAGE));
        };

        fetchUsers();
    }, []);

    const handleClick = (num) => {
        setPage(num);
    };

    const prev = () => {
        setPage(page - 1);
    };
    const next = () => {
        setPage(page + 1);
    };

    return (
        <>
            {loading ? (
                <p>Loading</p>
            ) : (
                <>
                    <Users users={users} page={page} />
                    <Pagination
                        totalPages={totalPages}
                        handleClick={handleClick}
                        prev={prev}
                        next={next}
                        page={page}
                    />
                </>
            )}
        </>
    );
}

export default Home;
