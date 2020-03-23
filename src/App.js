import React, { Fragment, useEffect, useState } from 'react';
import { loggedUser, users } from './constants';
import Main from './components/Main';
import End from './components/End';

const App = () => {
	useEffect(() => {
		console.clear();
		const { id, likedUsers, superLikedUsers, dislikedUsers, } = loggedUser;
		console.log({
			id: id.toString(),
			likedUsers: likedUsers.toString(),
			superLikedUsers: superLikedUsers.toString(),
			dislikedUsers: dislikedUsers.toString()
		});
		users.map(user => {
			const { id, likedBy, superLikedBy, dislikedBy } = user;
			return console.log({
				id: id.toString(),
				likedBy: likedBy.toString(),
				superLikedBy: superLikedBy.toString(),
				dislikedBy: dislikedBy.toString(),
			});
		});
	});

	const [index, setIndex] = useState(0);
	const [end, setEnd] = useState(false);

	const next = () => index < users.length - 1 ? setIndex(index + 1) : setEnd(true);
	
	const rewind = () => {
		setIndex(index - 1);

		loggedUser.dislikedUsers.find(dislikedUser => dislikedUser === users[index - 1].id) &&
			loggedUser.dislikedUsers.pop();
		
		loggedUser.likedUsers.find(likedUser => likedUser === users[index - 1].id) &&
			loggedUser.likedUsers.pop();
		
		loggedUser.superLikedUsers.find(superLikedUser => superLikedUser === users[index - 1].id) &&
			loggedUser.superLikedUsers.pop();

		users[index - 1].dislikedBy.find(disLiked => disLiked === loggedUser.id) &&
			users[index - 1].dislikedBy.pop();	

		users[index - 1].likedBy.find(liked => liked === loggedUser.id) &&
			users[index - 1].likedBy.pop();

		users[index - 1].superLikedBy.find(superLiked => superLiked === loggedUser.id) &&
			users[index - 1].superLikedBy.pop();
	}

	const dislike = () => {
		next();
		loggedUser.dislikedUsers.push(users[index].id);
		users[index].dislikedBy.push(loggedUser.id);
	}

	const like = () => {
		next();
		loggedUser.likedUsers.push(users[index].id);
		users[index].likedBy.push(loggedUser.id);
	}

	const superlike = () => {
		next();
		loggedUser.superLikedUsers.push(users[index].id);
		users[index].superLikedBy.push(loggedUser.id);
	}

	return (
		<Fragment>
			{
				!end ?
					index < users.length &&
					<Main
						users={ users }
						index={ index }
						rewind={ rewind }
						dislike={ dislike }
						like={ like }
						superlike={ superlike }
					/>
				:
					<End users={ users } loggedUser={ loggedUser } />
			}
		</Fragment>
	);
}

App.displayName = 'App';

export default App;