import { useSelector,useDispatch } from 'react-redux';

function ProfilePage () {

    // USE - SELECTOR
    const user = useSelector((store) => store.user);
    // console.log(user);

    return (
        <div>
            <h1>Profile</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p> 
        </div>
    )
} // END OF ProfilePage

export default ProfilePage;