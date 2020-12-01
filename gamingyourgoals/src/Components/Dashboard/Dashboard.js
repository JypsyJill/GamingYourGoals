import React, {Component} from 'react';
import { Link } from "react-router-dom";
import posts from "./../../post_data.json";
import "./Post.css";

let displayGoals = posts.map(post => {
        return(
            <li key={post.id}>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
            </li>
        );
    });


export default Dashboard; 