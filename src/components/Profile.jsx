import React, { useContext } from "react";
import UserContext from "../context/userContext";

const Profile = () => {
	const { user } = useContext(UserContext);
	return (
		<>
			{user ? (
				<div>
                    <h1>Profile Page</h1>
					<h2>Welcome {user.username}</h2>
				</div>
			) : (
				<h2>You are not logged in</h2>
			)}
		</>
	);
};

export default Profile;
