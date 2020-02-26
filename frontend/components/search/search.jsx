import React from "react";
import { Link } from "react-router-dom";

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
        this.props.history.push(`${this.state.search}`)
    }

    update(e) {
        this.setState({
            search: e.currentTarget.value
        });
    }

    
}

export default Search;