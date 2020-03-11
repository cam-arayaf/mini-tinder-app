import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { getImage } from '../../utils';

const LikedUsers = ({ users, loggedUser }) => (
    <Fragment>
        <Grid item xs={ 12 }>
            <span>People you liked... Let's hope they like you too!</span>
        </Grid>
        <Grid container spacing={ 3 } justify="center">
            {
                loggedUser.likedUsers.map(likedUser => {
                    const name = users.find(user => user.id === likedUser).name;
                    return (
                        <Grid key={ likedUser } item xs={ 4 }>
                            <img src={ getImage(name) } alt={ name } />
                        </Grid>
                    );
                })
            }
        </Grid>
    </Fragment>
);

LikedUsers.displayName = 'LikedUsers';

export default LikedUsers;