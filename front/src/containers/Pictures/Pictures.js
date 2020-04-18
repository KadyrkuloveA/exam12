import React, {Fragment, useEffect} from 'react';
import PictureGridItem from "../../components/PictureGridItem/PictureGridItem";
import {fetchPictures} from "../../store/actions/picturesActions";
import {connect} from "react-redux";

const Pictures = props => {

    useEffect(() => {
        props.fetchPictures();
        //eslint-disable-next-line
    }, []);


    return (
        <Fragment>
            {props.pictures.map(picture => (
                <PictureGridItem
                    key={picture._id}
                    title={picture.title}
                    id={picture._id}
                    image={picture.image}
                    user={picture.user}
                />
            ))}
        </Fragment>
    );
};

const mapStateToProps = state => ({
    pictures: state.pictures.pictures,
});

const mapDispatchToProps = dispatch => ({
    fetchPictures: () => dispatch(fetchPictures()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pictures);