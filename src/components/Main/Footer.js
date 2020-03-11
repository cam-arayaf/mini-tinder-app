import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import rewindImg from './../../assets/img/misc/rewind.png';
import dislikeImg from './../../assets/img/misc/dislike.png';
import likeImg from './../../assets/img/misc/like.png';
import superlikeImg from './../../assets/img/misc/superlike.png';

const images = [rewindImg, dislikeImg, likeImg, superlikeImg];

const Footer = ({ rewind, dislike, like, superlike }) => (
    <footer>
        <Grid container spacing={ 3 } justify="center">
            {
                images.map((image, index) => {
                    const onClick = () =>
                        index === 0 ? rewind() : index === 1 ? dislike() : index === 2 ? like() : superlike();
                    const alt =
                        index === 0 ? 'rewind' : index === 1 ? 'dislike' : index === 2 ? 'like' : 'superlike';
                    return (
                        <Grid key={ image } item xs={ 3 }>
                            <IconButton onClick={ () => onClick() }>
                                <img src={ image } alt={ alt } width="20" heigth="20" />
                            </IconButton>
                        </Grid>
                    );
                })
            }
        </Grid>
    </footer>
);

Footer.displayName = 'Footer';

export default Footer;