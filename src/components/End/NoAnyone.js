import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';

const NoAnyone = ({ users }) => (
    <Fragment>
        <Grid item xs={ 12 }>
            <span>There's no anyone arround you.</span>
        </Grid>
        <Grid item xs={ 12 }>
            <img src={ users[0].image } alt={ users[0].name } />
        </Grid>
    </Fragment>
);

NoAnyone.displayName = 'NoAnyone';

export default NoAnyone;