import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import FormElement from "../../components/UI/Form/FormElement";
import {addPicture} from "../../store/actions/picturesActions";
import Button from "@material-ui/core/Button";

class AddPicture extends Component {
    state = {
        title: '',
        image: '',
    };

    submitFormHandler = async event => {
        event.preventDefault();

        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            let value = this.state[key];

            formData.append(key, value);
        });

        await this.props.addPicture(formData);
        this.props.history.push('/');
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        })
    };

    render() {
        return (
            <Fragment>
                <Box pb={2} pt={2}>
                    <Typography variant="h4">New picture</Typography>
                </Box>

                <form onSubmit={this.submitFormHandler}>
                    <Grid item xs>
                        <FormElement
                            type="text"
                            propertyName="title" required
                            title="Title"
                            placeholder="Enter product title"
                            onChange={this.inputChangeHandler}
                            value={this.state.title}
                        />
                    </Grid>
                    <Grid item xs>
                        <FormElement
                            type="file"
                            propertyName="image"
                            title="Image"
                            onChange={this.fileChangeHandler}
                        />
                    </Grid>
                    <Grid item xs>
                        <Button type="submit" color="primary" variant="contained">Create</Button>
                    </Grid>
                </form>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addPicture: (pictureData) => dispatch(addPicture(pictureData)),
});

export default connect(null, mapDispatchToProps)(AddPicture);