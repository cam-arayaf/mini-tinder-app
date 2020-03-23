import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { getImage } from './../../helpers';

const NoAnyone = ({ loggedUser }) => (
    <Fragment>
        <Grid item xs={ 12 }>
            <span>There's no anyone arround you.</span>
        </Grid>
        <Grid item xs={ 12 }>
            <img src={ getImage(loggedUser.name) } alt={ loggedUser.name } />
        </Grid>
    </Fragment>
);

NoAnyone.displayName = 'NoAnyone';

export default NoAnyone;