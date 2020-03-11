import React from 'react';
import { Grid } from '@material-ui/core';
import NoAnyone from './NoAnyone';
import LikedUsers from './LikedUsers';
import SuperLikedUsers from './SuperLikedUsers';

const End = ({ users, loggedUser }) => (
    <section className="section-end">
        <Grid container spacing={ 3 } justify="center">
            <NoAnyone loggedUser={ loggedUser } />
            {
                loggedUser.likedUsers.length ?
                    <LikedUsers users={ users } loggedUser={ loggedUser } /> : null
            }
            {
                loggedUser.superLikedUsers.length ?
                    <SuperLikedUsers users={ users } loggedUser={ loggedUser } /> : null
            }
        </Grid>
    </section>
);

End.displayName = 'End';

export default End;