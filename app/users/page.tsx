"use client";
import { SelectedUser } from "@/drizzle/types";
import React, { useEffect, useState } from "react";

const UsersPage = () => {
	const [users, setUsers] = useState<SelectedUser[]>([]);

	useEffect(() => {
		const getUsers = async () => {
			const response = await fetch("/api/users");
			const result = await response.json();
			if (result?.data && result.data.length >= 0) {
				console.log(result.data);
				setUsers(result.data);
			} else {
				setUsers([]);
			}
		};
		getUsers();
	}, []);

	return (
		<div>
			{users.length > 0 ? (
				users.map((user) => {
					return <div key={user.id}>{user.id}</div>;
				})
			) : (
				<div>No users</div>
			)}
		</div>
	);
};

export default UsersPage;
