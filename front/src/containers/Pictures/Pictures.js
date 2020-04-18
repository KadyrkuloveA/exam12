import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import PictureGridItem from "../../components/PictureGridItem/PictureGridItem";
import {fetchPictures} from "../../store/actions/picturesActions";
import {connect} from "react-redux";

class Pictures extends Component {

    componentDidMount() {
        this.props.fetchPictures(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.fetchPictures(this.props.match.params.id);
        }
    }

    render() {
        return (
            <Grid item container direction="row" spacing={1}>
                {this.props.pictures.map(picture => (
                    <PictureGridItem
                        key={picture._id}
                        title={picture.title}
                        id={picture._id}
                        image={picture.image}
                        user={picture.user}
                    />
                ))}
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    pictures: state.pictures.pictures,
});

const mapDispatchToProps = dispatch => ({
    fetchPictures: userId => dispatch(fetchPictures(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pictures);