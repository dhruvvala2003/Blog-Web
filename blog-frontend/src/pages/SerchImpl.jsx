import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Post from '../component/Post';
import { deletePostService } from '../service/PostService';
import { toast } from 'react-toastify';
import Base from '../component/Base';
import { Col, Container, Row } from 'reactstrap';
import CategorySideManue from '../component/CategorySideManue';

const SerchImpl = () => {
    const [post, setPost] = useState([]);

    const location = useLocation();

    useEffect(() => {
        console.log("location", location.state.tmp);
        setPost( location.state.tmp);

    }, [location.state]);

    const deletePost = (post1) => {
        deletePostService(post1.post_id).then((res) => {
            toast.success("Post deleted successfully");

            let newContent = post.filter((p) => p.post_id !== post1.post_id);

            setPost([...newContent]);
        })
        .catch((error) => {
            console.log(error);
            toast.warn("Post can't be deleted");
        });
    }

    return (
        <Base>
            <Container style={{ backgroundColor: "#eceff1" }}>
                <Row>
                    <Col md={2} className='border mt-3 pt-3'>
                        <CategorySideManue />
                    </Col>

                    <Col md={10}>
                        {post?.length > 0 ? (
                            post.map((p, index) => (
                                <Post deletePost={deletePost} post={p} key={p.post_id} />
                            ))
                        ) : (
                            'No Post In This Categories'
                        )}
                    </Col>
                </Row>
            </Container>
        </Base>
    );
}

export default SerchImpl;
