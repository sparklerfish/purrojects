import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ""
        };

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.search === "") return;
        this.props.searchProjects(this.state.search)
            .then(res => this.props.history.push(`/search/${this.state.search}`))
    }

    update(e) {
        this.setState({search: e.currentTarget.value});
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input
                    onChange={this.update}
                    type="text"
                    placeholder="Let's Make..."
                    name="search"
                    value={this.state.search}
                    autoComplete="off"
                />
                <i className="fa fa-search w3-large" onClick={this.handleSubmit}></i>
            </form>
        );
    }
}

export default Search;