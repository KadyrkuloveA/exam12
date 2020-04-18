import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {apiURL} from "../../constants";
import imageNotAvailable from "../../assets/images/image_not_available.jpg";
import Popup from "../Popup/Popup";

const useStyles = makeStyles({
    card: {
        height: '100%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
});

const PictureGridItem = props => {
    const classes = useStyles();

    let image = imageNotAvailable;

    if (props.image) {
        image = apiURL + '/' + props.image;
    }

    return (
        <Grid item xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.card}>
                <CardHeader title={props.title}/>
                <CardMedia image={image} title={props.title} className={classes.media}/>
                <CardActions>
                    <IconButton component={Link} to={'/pictures/' + props.user._id}>
                        {props.user.username}
                        <ArrowForwardIcon/>
                    </IconButton>
                    <Popup
                        title={props.title}
                        image={props.image}
                    />
                </CardActions>
            </Card>
        </Grid>
    );
};

PictureGridItem.propTypes = {
    image: PropTypes.string,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.any.isRequired
};

export default PictureGridItem;