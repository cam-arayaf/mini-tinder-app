import React, { Fragment, useEffect, useState } from 'react';
import { loggedUser, users } from './constants';
import Main from './components/Main';
import End from './components/End';

const App = () => {
	useEffect(() => console.log('loggedUser:', loggedUser));
	useEffect(() => console.log('users:', users));

	const [index, setIndex] = useState(0);
	const [end, setEnd] = useState(false);

	const next = () => index < users.length - 1 ? setIndex(index + 1) : setEnd(true);
	
	const rewind = () => index > 0 && setIndex(index - 1);

	const dislike = () => {
		next();
		loggedUser.dislikedUsers.push(users[index].id);
	}

	const like = () => {
		next();
		loggedUser.likedUsers.push(users[index].id);
		users[index].likedBy.push(loggedUser.id);
	}

	const superlike = () => {
		next();
		loggedUser.superLikedUsers.push(users[index].id);
		users[index].likedBy.push(loggedUser.id);
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