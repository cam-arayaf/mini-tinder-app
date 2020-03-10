import React from 'react';
import { Grid } from '@material-ui/core';
import user from './../../assets/img/misc/user.png';
import logo from './../../assets/img/misc/logo.png';
import messages from './../../assets/img/misc/messages.png';

const images = [user, logo, messages];

const Header = () => (
    <header>
        <Grid container spacing={ 3 } justify="center">
            {
                images.map((image, index) => {
                    const alt = index === 0 ? 'user' : index === 1 ? 'logo' : 'messages';

                    const widthHeigth = index === 1 ? 35 : 20;

                    return (
                        <Grid key={ image} item xs={ 4 }>
                            <img src={ image } alt={ alt } width={ widthHeigth } heigth={ widthHeigth } />
                        </Grid>
                    );
                })
            }
        </Grid>
    </header>
);

Header.displayName = 'Header';

export default Header;