import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';

const SuperLikedUsers = ({ users }) => (
    <Fragment>
        <Grid item xs={ 12 }>
            <span>People you super liked!</span>
        </Grid>
        <Grid container spacing={ 3 } justify="center">
            {
                users[0].superLikedUsers.map(superLikedUser => {
                    const user = users.find(user => user.id === superLikedUser);
                    const src = user.image;
                    const alt = user.name;
                    return (
                        <Grid key={ superLikedUser } item xs={ 4 }>
                            <img src={ src } alt={ alt } />
                        </Grid>
                    );
                })
            }
        </Grid>
    </Fragment>
);

SuperLikedUsers.displayName = 'SuperLikedUsers';

export default SuperLikedUsers;