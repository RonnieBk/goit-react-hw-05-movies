import { getMovieInfo } from 'api.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const direction = '/reviews';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const data = async () => {
      try {
        const info = await getMovieInfo(movieId, direction);
        const reviewsInfo = await info.results;
        setReviews(reviewsInfo);
      } catch (error) {
        console.log(error.message);
      }
    };

    data();
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ul>
          {reviews.map(item => (
            <li key={item.id}>
              <p style={{ fontWeight: 'bold' }}>Author: {item.author}</p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
