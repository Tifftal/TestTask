import s from './PostCard.module.css';
import { Props } from './types';

const PostCard: React.FC<Props> = ({
    id,
    title,
    body
}) => {
    return (
        <div className={s.card}>
            <h2>{id}</h2>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default PostCard;