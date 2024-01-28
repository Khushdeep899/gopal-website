import React from 'react';

const Testimonial = ({ quote, author }) => {
  return (
    <div className="testimonial bg-gray-100 p-4 rounded-lg shadow">
      <blockquote className="text-gray-600 italic mb-4">"{quote}"</blockquote>
      <div className="author text-gray-700 font-bold">- {author}</div>
    </div>
  );
};

export default Testimonial;
