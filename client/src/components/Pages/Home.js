import React from "react";
import axios from "axios";

class Home extends React.Component {
    state = {
        articles: [],
        saved: {
            title: "",
            date: "",
            url: ""
        }
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

    saveArticle = id => {
        let filteredArticle = this.state.articles.filter(article => article._id === id);
        let filterOne = filteredArticle[0];

        console.log(filterOne);

        this.setState({
            saved: {
                title: filterOne.headline.main,
                date: filterOne.pub_date,
                url: filterOne.web_url
            }
        }, () => {
            axios.post('/api/article', this.state.saved).then(response => {
                if (response) {
                    console.log("SUCCESS! ", response);
                }
            }).catch(err => {
                throw (err);
            });
        });

        
    };

    render() {
        return (
            <div className="text-center">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
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
                    <div className="col-sm-2"></div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        {
                            this.state.articles.map(item => {
                                // console.log("ITEM ", item);
                                return (
                                    <div key={item._id}>
                                        <div className="card">
                                            <h4 className="card-header">{item.headline.main}</h4>
                                            <div className="card-body">
                                                <p className="card-text">"{item.snippet}"</p>
                                                <a href={item.web_url} target="_blank">Read here</a>
                                            </div>
                                            <button className="btn btn-info" onClick={() => this.saveArticle(item._id)}>Save article</button>
                                        </div>
                                        <br />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>
        );
    }
}

export default Home;
