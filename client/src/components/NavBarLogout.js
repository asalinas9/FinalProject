import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/Drawer';
import './navBarStyle.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    Typography, Button
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary
    },
    appBar: {
        backgroundColor: '#00a82d',
        color: 'white',
    },
}));
class ButtonAppBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedOut: false
        }
        this.handleLogOut = this.handleLogOut.bind(this)
    }
    handleLogOut() {
        document.cookie = "connect.sid=; expires=Thu, 01-Jan-1970 00:00:01 GMT;";
        axios.get("/authentication/logout")
            .then(res => {
                this.setState({
                    loggedOut: true
                });
            });
    }
    render() {
        if (this.state.loggedOut) {
            return (
                <Redirect to="/" />
            )
        }
        const { classes } = this.props;
        return (
            <Router>
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar>
                        <Toolbar>
                            <Typography variant="h6" className={classes.title} nowrap>
                                Lime Tree
                            </Typography>
                            <div style={{float: 'right'}}>
                                <Button color="inherit" href="/">Home</Button>
                                <Button color="inherit" onClick={this.handleLogOut}>Log Out</Button>
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
            </Router>
        );
    }
}
ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(useStyles)(ButtonAppBar);