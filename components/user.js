function User({ user }) {
    // console.log(user);
    return (
        <>
            <p>{`Name: ${user.name.first} ${user.name.last}`}</p>
            <hr />
        </>
    );
}

export default User;
