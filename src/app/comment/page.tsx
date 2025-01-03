import { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && comment) {
      setComments([...comments, { name, comment }]);
      setName('');
      setComment('');
    }
  };

  return (
    <div className="mx-auto px-5 max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden mt-8">
      <h2 className="font-bold text-2xl text-gray-800 mb-4">Comments</h2>
      <form onSubmit={handleCommentSubmit} className="mb-4">
        <div className="flex flex-col mb-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <textarea
            placeholder="Your Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
            rows={4}
            required
          />
        </div>
        <div className='flex justify-center '>
            <button
          type="submit"
          className="px-10 py-6 mx-50% bg-gray-200 inline-flex items-center justify-center mt-3 rounded-xl hover:bg-gray-300 transition duration-200"
        >
          Submit
        </button></div>
        
      </form>

      <div className="mt-6">
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet.</p>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <p className="font-semibold">{comment.name}</p>
              <p className="text-gray-700">{comment.comment}</p>
            </div>
          ))
        )}
      </div>

      
      <div className="mt-6">
    
        <div className="border-b border-gray-200 py-4">
          <p className="font-semibold">Shayan Ali</p>
          <p className="text-gray-700">This is a great blog post!</p>
        </div>
        <div className="border-b border-gray-200 py-4">
          <p className="font-semibold">Roshan Siddiqui</p>
          <p className="text-gray-700">I learned a lot from this article. Thank you!</p>
        </div>
        <div className="border-b border-gray-200 py-4">
          <p className="font-semibold">Fatima Khan</p>
          <p className="text-gray-700">Looking forward to more posts like this!</p>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;