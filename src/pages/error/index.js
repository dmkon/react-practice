import React from 'react';
import { Link } from 'react-router';

export default class ErrorPage extends React.Component {
    render() {
        return (
            <div className='alert alert-danger'>
                <h3>Page not found</h3>
                <p>Go to <Link to='/'>home</Link></p>
            </div>
        );
    }
}
