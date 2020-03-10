import React, { Fragment, useEffect, useState } from 'react';
import data from './db/data.json';
import Main from './components/Main';
import End from './components/End';

const App = () => {
	const [users, setUsers] = useState([]);
	const [index, setIndex] = useState(0);
	const [end, setEnd] = useState(false);
    
	useEffect(() => setUsers(data), []);
	useEffect(() => setIndex(1), []);
	useEffect(() => console.log(users));

	const next = () => index < users.length - 1 ? setIndex(index + 1) : setEnd(true);
	
	const rewind = () => index > 0 && setIndex(index - 1);

	const dislike = () => {
		next();
		users[0].dislikedUsers.push(users[index].id);
	}

	const like = () => {
		next();
		users[0].likedUsers.push(users[index].id);
		users[index].likedBy.push(users[0].id);
	}

	const superlike = () => {
		next();
		users[0].superLikedUsers.push(users[index].id);
		users[index].likedBy.push(users[0].id);
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
					<End users={ users } />
			}
		</Fragment>
	);
}

App.displayName = 'App';

export default App;