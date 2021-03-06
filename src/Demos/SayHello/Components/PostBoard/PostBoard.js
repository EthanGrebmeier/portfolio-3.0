import React from 'react'
import Axios from 'axios'

import Post from '../Post/Post'
import PostForm from '../PostForm/PostForm'

import './PostBoard.scss'



export default class PostBoard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            loading: false,
            showForm: false,
        }   
    }

    styles = {
        "postBoard" : {
            "width" : '42%',
            "height" : '100vh',
            "position" : 'relative',
            "display" : 'flex',
            "flex-direction" : 'column'
        },
        "posts" : {
            "width" : '100%',
            "display" : 'flex',
            "flexWrap" : 'wrap',
            "justifyContent" : 'space-evenly',
            "alignItems" : 'start',
            "overflow" : 'scroll'
        },
        "header" : {
            "width" : '100%',
            "display" : 'flex',
            "flexDirection": 'column',
            "justifyContent" : 'center',
            "alignItems" : 'center',
            "borderBottom" : '1px solid lightgrey',
            "color" : 'black',
            "background" : 'white',
            "fontSize" : '32px',
            "marginBottom" : '15px',
            "position" : 'sticky',
            "top" : '0'
        },
        "loading" : {
            "position": 'absolute',
            "top" : '50%',
            "left" : '50%',
            "transform" : 'translateX(-50%) translateY(-50%)',
            "display" : 'flex',
            "justifyContent" : 'center',
            "alignItems" : 'center'
        },
        "buttons" : {
            "width" : '80%',
            "max-width" : '500px',
            "display" : 'flex',
            "justifyContent" : 'space-between',
            "marginTop" : '20px',
            "marginBottom" : '20px'
        },
        "button" : {
            "height" : '30px',
            "width" : '120px',
            "background" : 'transparent',
            "border" : '1px solid black',
            "borderRadius" : '8px',
            "color" : 'black',
            "cursor" : 'pointer'
        }
    }

    componentDidMount(){
        this.getPosts({})
    }

    setNewPost = (newPost) => {
        this.getPosts(newPost)
    }

    closeForm = (event) => {

        this.setState({
            showForm: false
        })

    }

    getPosts = (newPost) => {
        this.setState({
            loading: true
        })
        Axios.get('https://say-hello-server.herokuapp.com/post')
        .then((posts) => {
            console.log(posts)
            let postsArray = []
            posts.data.forEach(post => {
                postsArray.push(post)
                console.log(post.posted)
            });
            postsArray.pop()
            if (newPost){
                console.log("newPOst")
                if (Object.keys(newPost).length > 0) {
                    postsArray[0] = newPost
                }
            }
            this.setState({
                posts : postsArray,
                loading : false
            })
        })
    }

    renderPosts = () => {
        if (this.state.loading){
            return <div style={this.styles.loading}> <h1> Loading... </h1> </div>
        }
        return this.state.posts.map((post) => {
            return (
                <Post message={post.message} color={post.color} emoji={post.emoji} date={post.posted} name={post.name} />
            )
        })
    }

    newPostClicked = () => {
        let current = this.state.showForm
        console.log(current)
        this.setState({
            showForm: !current
        })
    }

    render(){
        return(
        <div className="postboard-container" style={this.styles.postBoard}>
            <div className="postboard-header" style={this.styles.header}>
                <h1>
                    Say Hello
                </h1>
                <div className="postboard-buttons" style={this.styles.buttons}>
                    <button onClick={this.newPostClicked} style={this.styles.button} >
                        Create a Post
                    </button>
                    <button onClick={() => this.getPosts({})} style={this.styles.button}>
                        Get New Posts
                    </button>
                </div>
                {this.state.showForm === true && <PostForm showForm={this.state.showForm} closeForm={this.closeForm} setNewPost={this.setNewPost} /> }
            </div>

            <div className="posts" style={this.styles.posts}>
                {this.renderPosts()}
            </div>
        </div>)
    }
}