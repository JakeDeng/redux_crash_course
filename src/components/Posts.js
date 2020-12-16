import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {

    //life cycle method
    componentWillMount() {
        this.props.fetchPosts();
    }

    static getDerivedStateFromProps(){

    }

    render(){
        const postItems = this.props.posts.map( post => (
                <div key={post.id} >
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                { postItems }    
            </div>
        );
    }
}

//define component props types
Posts.protoTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

//map state to props: get state from redux and map to the properties of the component
const mapStateToProps = state => ({
    //state.posts is the name we give in root reducer
    //posts is the component property
    posts: state.posts.items,
    newPost: state.posts.item
});

//connect Posts component to the store
//fetchPosts is passed in as props
export default connect( mapStateToProps, { fetchPosts })(Posts);
