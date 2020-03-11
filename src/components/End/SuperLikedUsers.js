import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { getImage } from '../../utils';

const SuperLikedUsers = ({ users, loggedUser }) => (
    <Fragment>
        <Grid item xs={ 12 }>
            <span>People you super liked!</span>
        </Grid>
        <Grid container spacing={ 3 } justify="center">
            {
                loggedUser.superLikedUsers.map(superLikedUser => {
                    const name = users.find(user => user.id === superLikedUser).name;
                    return (
                        <Grid key={ superLikedUser } item xs={ 4 }>
                            <img src={ getImage(name) } alt={ name } />
                        </Grid>
                    );
                })
            }
        </Grid>
    </Fragment>
);

SuperLikedUsers.displayName = 'SuperLikedUsers';

export default SuperLikedUsers;