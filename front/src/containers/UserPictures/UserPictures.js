import React, {Component, Fragment} from 'react';
import {fetchPictures} from "../../store/actions/picturesActions";
import {connect, useSelector} from "react-redux";
import PictureGridItem from "../../components/PictureGridItem/PictureGridItem";

class UserPictures extends Component {
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
            <Fragment>
                {this.props.pictures.map(picture => (
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
    }
}

const mapStateToProps = state => ({
    pictures: state.pictures.pictures,
});

const mapDispatchToProps = dispatch => ({
    fetchPictures: (userId) => dispatch(fetchPictures(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPictures);