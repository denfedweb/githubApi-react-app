import React, {Fragment, useContext} from 'react';
import Search from "../components/Search";
import Card from "../components/Card";
import {GithubContext} from "../context/github/githubContext";

const Home = () => {
    const {loading, users} = useContext(GithubContext);
    return (
        <Fragment>
            <h1>Home page</h1>
            <Search/>
            <div className="row">
                {loading
                ? <p>loading</p>
                : users.map(user => (
                        <div className="col-sm-4 md-4" key={user.id}>
                            <Card user={user}/>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    );
};

export default Home;
