import React, {Fragment, useContext, useEffect} from 'react';
import {GithubContext} from "../context/github/githubContext";
import {Link} from "react-router-dom";
import Repos from "../components/Repos";

const Profile = ({match}) => {
    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext);
    const urlName = match.params.name;
    useEffect(()=>{
        getUser(urlName);
        getRepos(urlName);
        //eslint-disable-next-line
    }, []);

    if(loading){
        return <p className="text-center">Loading...</p>
    }

    const {name, company, avatar_url, location, bio, blog, login, html_url, followers, public_repos, public_gists, following} = user;

    return (
        <Fragment>
            <h1>Profile page</h1>
            <Link to="/" className="btn btn-link">Go home</Link>
            <div className="card md-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img style={{width: "200px"}} src={avatar_url} alt={name} />
                            <h1>{name}</h1>
                            {location && <p>Location: {location}</p>}
                        </div>
                        <div className="col">
                            {
                                bio && <Fragment>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </Fragment>
                            }

                            <a href={html_url} className="btn btn-dark" target="_blank" rel="noopener noreferrer">Open profile in github</a>
                            <ul>
                                {login && <li>
                                    <strong>Username: </strong> {login}
                                </li>}
                                {company && <li>
                                    <strong>Company: </strong> {company}
                                </li>}
                                {blog && <li>
                                    <strong>Website: </strong> <a href={blog} target="_blank" rel="noopener noreferrer">{blog}</a>
                                </li>}
                            </ul>
                            <div className="badge badge-primary">Followers: {followers}</div>
                            <div className="badge badge-secondary">Following: {following}</div>
                            <div className="badge badge-success">Repositories: {public_repos}</div>
                            <div className="badge badge-dark">Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos}/>
        </Fragment>
    );
};

export default Profile;
