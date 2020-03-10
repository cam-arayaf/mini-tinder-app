import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';

const LikedUsers = ({ users }) => (
    <Fragment>
        <Grid item xs={ 12 }>
            <span>People you liked... Let's hope they like you too!</span>
        </Grid>
        <Grid container spacing={ 3 } justify="center">
            {
                users[0].likedUsers.map(likedUser => {
                    const user = users.find(user => user.id === likedUser);
                    const src = user.image;
                    const alt = user.name;
                    return (
                        <Grid key={ likedUser } item xs={ 4 }>
                            <img src={ src } alt={ alt } />
                        </Grid>
                    );
                })
            }
        </Grid>
    </Fragment>
);

LikedUsers.displayName = 'LikedUsers';

export default LikedUsers;