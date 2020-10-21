import React, { useState, Component, } from 'react';
import { Button, Typography, Card, CardMedia, CardContent, } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import posts from '../Data/Post-data';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '22.5% 22.5% 22.5%',
        justifyContent: 'center',
        padding: '80px',
    },

    card: {
        maxWidth: 445,
        display: 'grid',
        margin: '10px',
    },

    button: {
        color: '#5e47e0',
        width: '30%',
        marginTop: 20,
    },

    com_button: {
        color: '#5e47e0',
        width: '30%',
        marginTop: 20,
        marginLeft: 20,
    },

    media: {
        height: '500px',
    },
}))

function Post() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {posts.map((post, i) => (
                <Card key={i} className={classes.card}>
                    <CardMedia className={classes.media} image={post.Image} />
                    <CardContent>
                        <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
                            {post.caption}
                        </Typography>
                        <Button variant="outlined" className={classes.button}>
                            <FavoriteIcon />
                            {/* {count.like} */}
                        </Button>
                        <Button variant="outlined" className={classes.com_button}>
                            <QuestionAnswerIcon />
                        </Button>
                    </CardContent>
                </Card>
            )
            )}
        </div>
    )


}

export default Post;