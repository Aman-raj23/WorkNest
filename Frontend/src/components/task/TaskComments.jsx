import { useState } from 'react';
import { Send, MessageSquare, Trash2 } from 'lucide-react';
import Button from '../common/Button';

export default function TaskComments({ taskId, initialComments = [] }) {
  const [comments, setComments] = useState(
    initialComments.length > 0
      ? initialComments
      : [
          {
            id: 1,
            author: 'Aman Raj',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
            content: 'Implemented the base endpoint schema. Pending review on rate limiter rules.',
            timestamp: '2 hours ago',
          },
          {
            id: 2,
            author: 'Sarah Chen',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
            content: 'Looks good! Make sure to align with our JWT bearer token middleware.',
            timestamp: '45 mins ago',
          },
        ]
  );
  const [newComment, setNewComment] = useState('');

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      author: 'Aman Raj',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      content: newComment.trim(),
      timestamp: 'Just now',
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  const handleDelete = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
        <MessageSquare size={16} className="text-indigo-600" />
        <h4 className="text-xs font-bold text-slate-800">Discussion & Activity ({comments.length})</h4>
      </div>

      <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
        {comments.map((comment) => (
          <div key={comment.id} className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-1.5 group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={comment.avatar}
                  alt={comment.author}
                  className="w-5 h-5 rounded-full object-cover"
                />
                <span className="text-[11px] font-semibold text-slate-900">{comment.author}</span>
                <span className="text-[10px] text-slate-400">• {comment.timestamp}</span>
              </div>
              <button
                onClick={() => handleDelete(comment.id)}
                className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-rose-600 transition"
                title="Delete comment"
              >
                <Trash2 size={12} />
              </button>
            </div>
            <p className="text-xs text-slate-600 pl-7 leading-relaxed">{comment.content}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleAddComment} className="flex gap-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Leave a comment or update..."
          className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800"
        />
        <Button type="submit" variant="primary" size="sm" icon={Send} disabled={!newComment.trim()}>
          Post
        </Button>
      </form>
    </div>
  );
}
