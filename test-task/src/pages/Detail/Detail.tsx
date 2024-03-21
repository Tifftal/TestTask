import { useNavigate, useParams } from 'react-router-dom';
import s from './Detail.module.css';
import { useEffect, useState } from 'react';
import { PostModel } from './types';

const Detail = () => {
    const [post, setPost] = useState<PostModel>();
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const json = await response.json();
                setPost(json);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPost();
    }, []);

    return (
        <div className={s.detail}>
            <button onClick={() => navigate(-1)}>← Назад</button>
            <div>
                <h1>{post?.title}</h1>
                <p>{post?.body}</p>
            </div>
        </div>
    )
}

export default Detail;