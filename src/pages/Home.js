import React, {Fragment} from 'react';
import Search from "../components/Search";
import Card from "../components/Card";

const Home = () => {
    const cards = new Array(15).fill("").map((_,i)=>i);
    return (
        <Fragment>
            <h1>Home page</h1>
            <Search/>
            <div className="row">
                {cards.map(card => {
                    return (
                        <div className="col-sm-4 md-4" key={card}>
                            <Card/>
                        </div>
                    )
                })}

            </div>
        </Fragment>
    );
};

export default Home;
