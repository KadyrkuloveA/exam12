import React from 'react';
import FacebookLoginButton from 'react-facebook-login/dist/facebook-login-render-props';
import {useDispatch} from "react-redux";
import {loginWithFacebook} from "../../store/actions/usersActions";
import Button from "@material-ui/core/Button";
import FacebookIcon from '@material-ui/icons/Facebook';

const FacebookLogin = () => {
  const dispatch = useDispatch();

  const callback = (facebookData) => {
    if (facebookData.id) {
      dispatch(loginWithFacebook(facebookData))
    }
  };

  return (
    <FacebookLoginButton
      appId="529298861118192"
      callback={callback}
      render={renderProps => (
        <Button
          variant="contained"
          color="primary"
          onClick={renderProps.onClick}
          startIcon={<FacebookIcon/>}
        >
          Sign Up with Facebook
        </Button>
      )}
    />
  );
};

export default FacebookLogin;