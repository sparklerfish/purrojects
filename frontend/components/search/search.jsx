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
        this.props.searchProjects(this.state.search)
            .then(res => this.props.history.push(`/search/${this.state.search}`))
        setTimeout(() => this.setState({search: ""}), 100);
    }

    update(e) {
        this.setState({
            search: e.currentTarget.value
        });
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
                />
                <button type="submit">
                    <i className="fa fa-search w3-large"></i>
                </button>
            </form>
        )
    }

}

export default Search;