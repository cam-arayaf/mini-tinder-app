import React from 'react';
import { Grid } from '@material-ui/core';
import NoAnyone from './NoAnyone';
import LikedUsers from './LikedUsers';
import SuperLikedUsers from './SuperLikedUsers';

const End = ({ users }) => (
    <section className="section-end">
        <Grid container spacing={ 3 } justify="center">
            <NoAnyone users={ users } />
            { users[0].likedUsers.length ? <LikedUsers users={ users } /> : null }
            { users[0].superLikedUsers.length ? <SuperLikedUsers users={ users } /> : null }
        </Grid>
    </section>
);

End.displayName = 'End';

export default End;