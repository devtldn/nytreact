import React from 'react';
import axios from 'axios';

class Saved extends React.Component {
    state = {
        saved: []
    }

    componentDidMount = () => {
        this.showSaved();
    }

    showSaved = () => {
        axios.get('/api/article').then(response => {
            this.setState({
                saved: response.data
            });
        });
    }

    deleteArticle = id => {
        axios.delete(`/api/article/${id}`).then(response => {
            if (response) {
                window.location.href = '/saved';
            }
        });
    }

    render() {
        return (
            <div className="row text-center">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <br />
                    {
                        this.state.saved.map(item => {
                            return (
                                <div key={item._id}>
                                    <div className="card">
                                        <h4 className="card-header">{item.title}</h4>
                                        <div className="card-body">
                                            <p className="card-text">"{item.snippet}"</p>
                                            <p className="card-text"><strong>Published date: </strong>{item.date}</p>
                                            <a href={item.url} target="_blank">Read here</a>
                                        </div>
                                        <button className="btn btn-danger" onClick={() => this.deleteArticle(item._id)}>Delete article</button>
                                    </div>
                                    <br />
                                </div>
                            )
                        })
                    }
                    <br />
                </div>
                <div className="col-sm-1"></div>
            </div>
        )
    }
}

export default Saved;
