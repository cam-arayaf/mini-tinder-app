import React from 'react';
import { Grid } from '@material-ui/core';

const Section = ({ users, index }) => (
    <section className="section-main">
        <Grid container spacing={ 3 } justify="center">
            <Grid item xs={ 12 }>
                <img src={ users[index].image } alt={ users[index].name } />
            </Grid>
            <Grid item xs={ 12 }>
                <strong>{ `${ users[index].name }, ${ users[index].age }` }</strong>
            </Grid>
            <Grid item xs={ 12 }>
                <span>{ users[index].description }</span>
            </Grid>
        </Grid>
    </section>
);

Section.displayName = 'Section';

export default Section;