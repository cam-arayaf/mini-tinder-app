import React, { Fragment } from 'react';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

const Main = ({ users, index, rewind, dislike, like, superlike }) => (
	<Fragment>
		<Header />
		<Section users={ users } index={ index } />
		<Footer
			rewind={ rewind }
			dislike={ dislike }
			like={ like }
			superlike={ superlike }
			rewindUser={ index }
		/>
	</Fragment>
);

Main.displayName = 'Main';

export default Main;