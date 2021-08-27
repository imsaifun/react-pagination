import { USER_PER_PAGE } from "./../utails/constants";
import User from "./user";

function Users({ users, page }) {
    const startIndex = (page - 1) * USER_PER_PAGE;

    const selectedUsers = users.slice(startIndex, startIndex + USER_PER_PAGE);

    return (
        <>
            {selectedUsers.map(
                (user, id) => (
                    <User user={user} key={id} />
                )
            )}
        </>
    );
}

export default Users;
