import { useEffect, useState } from 'react';
import s from './Main.module.css';
import PostCard from '../../entities/PostCard/PostCard';
import { PostModel } from './types';
import { NavLink } from 'react-router-dom';

const Main = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);
    const [page, setPage] = useState<number>(1);
    const [listenScrollEvent, setListenScrollEvent] = useState<boolean>(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
                console.log(page)
                const json = await response.json();
                setPosts(prevPosts => [...prevPosts, ...json]);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        if (page < 5) {
            fetchPosts();
        } else {
            setListenScrollEvent(false);
            fetchPosts();
        }
    }, [page]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                setPage(prevPage => prevPage + 1);
            }
        };

        if (listenScrollEvent) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [listenScrollEvent]);

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <div className={s.main}>
            {posts.map((post, index) => (
                <NavLink to={`/TestTask/${post.id}`} key={index}>
                    <PostCard id={post.id} title={post.title} body={post.body} />
                </NavLink>
            ))}
            {page >= 5 ? (
                <button onClick={handleLoadMore} disabled={page >= 10 ? true : false}>
                    {'Load More'}
                </button>
            ) : "Loading..."}
        </div>
    );
};

export default Main;
