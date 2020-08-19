import React, { useState, } from 'react';
import { Button, Typography, Grid } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ForumIcon from '@material-ui/icons/Forum';
import posts from '../Data/Post-data';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(10),
    }
}))

function Post(props) {
    const [post, setPost] = useState(0);
    // console.log(post)

    // function increment() {
    //     setPost(count => count + 1)
    // }

    const classes = useStyles()

    return (
        <div className={classes.root} >
            <Grid container spacing={2} direction="row" justify='' alignItems="flex-start">
                <Grid item xs={12}  col={5}>
                    {posts.map(post => (
                        <Grid key={post.id} style={{ height: 530, width: '21%', border: '1px solid black', marginLeft: '30%', marginTop: '2%', }}>
                            <img src={post.Image} style={{ width: "95%", height: "350px", marginTop: '2%' }} alt="post" />
                            <Typography style={{ textAlign: 'center', marginTop: '2%' }}>{post.caption}</Typography>
                            <Button style={{ height: 50, width: '35%', border: '1px solid black', marginTop: '10%' }}  > <FavoriteIcon style={{ color: '#5e47e0', width: '30%', height: '10%' }} /></Button>
                            <Button style={{ height: 50, width: '35%', border: '1px solid black', marginTop: '10%', marginLeft: '20%' }} > <ForumIcon style={{ color: '#5e47e0', width: '30%', height: '10%' }} /> </Button>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </div>
    )
}

export default Post;