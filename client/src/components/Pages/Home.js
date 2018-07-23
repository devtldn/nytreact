import React from "react";
import axios from "axios";

class Home extends React.Component {
    state = {
        articles: []
    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    searchArticle = (event) => {
        event.preventDefault();

        axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=fd222fa16dcb41dfb347b5261ca9a032&q=${this.state.name}`).then(response => {
            var myArticles = response.data.response.docs;

            this.setState({ articles: [] });

            if (response) {
                this.setState({ articles: myArticles });
            } else {
                console.log("AXIOS ERROR!");
            };
        });
    };

    searchResults = (event) => {
        
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <br />
                        <form className="form" onSubmit={this.searchArticle}>
                            <input
                                value={this.state.value}
                                name="name"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Article title"
                                className="form-control"
                            />
                            <br />
                            <button className="btn btn-dark">Search article</button>
                        </form>
                        <br />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-12">
                        {
                            this.state.articles.map(item => {
                                console.log("ITEM ", item);
                                return (
                                    <div key={item._id}>
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">{item.headline.main}</h4>
                                                <br />
                                                <h5 className="card-text">"{item.snippet}"</h5>
                                                <br />
                                                <a href={item.web_url} target="_blank">Read here</a>
                                            </div>
                                            <button className="btn btn-info">Save article</button>
                                        </div>
                                        <br />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
