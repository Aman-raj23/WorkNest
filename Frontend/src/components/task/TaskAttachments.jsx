import { useState } from 'react';
import { Paperclip, Upload, FileText, Image as ImageIcon, Trash2, Download } from 'lucide-react';
import Button from '../common/Button';

export default function TaskAttachments({ taskId, initialAttachments = [] }) {
  const [attachments, setAttachments] = useState(
    initialAttachments.length > 0
      ? initialAttachments
      : [
          {
            id: 1,
            name: 'API_Architecture_Spec_v2.pdf',
            size: '2.4 MB',
            type: 'pdf',
            date: 'Oct 24, 2026',
          },
          {
            id: 2,
            name: 'Mobile_Wireframe_Flow.png',
            size: '1.1 MB',
            type: 'image',
            date: 'Oct 26, 2026',
          },
        ]
  );

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const newAttachment = {
      id: Date.now(),
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      type: file.type.includes('image') ? 'image' : 'doc',
      date: 'Just now',
    };

    setAttachments([...attachments, newAttachment]);
    e.target.value = '';
  };

  const handleDelete = (id) => {
    setAttachments(attachments.filter((a) => a.id !== id));
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
        <div className="flex items-center gap-2">
          <Paperclip size={16} className="text-indigo-600" />
          <h4 className="text-xs font-bold text-slate-800">Attachments ({attachments.length})</h4>
        </div>
        <label className="cursor-pointer inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition">
          <Upload size={13} />
          <span>Upload</span>
          <input type="file" className="hidden" onChange={handleFileUpload} />
        </label>
      </div>

      <div className="space-y-2">
        {attachments.map((file) => (
          <div
            key={file.id}
            className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-200/60 hover:bg-slate-100/60 transition group"
          >
            <div className="flex items-center gap-2.5 truncate">
              <div className="w-8 h-8 rounded-lg bg-indigo-100/70 text-indigo-600 flex items-center justify-center shrink-0">
                {file.type === 'image' ? <ImageIcon size={16} /> : <FileText size={16} />}
              </div>
              <div className="truncate">
                <p className="text-xs font-semibold text-slate-900 truncate">{file.name}</p>
                <p className="text-[10px] text-slate-400">
                  {file.size} • {file.date}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => handleDelete(file.id)}
                className="p-1 text-slate-400 hover:text-rose-600 transition"
                title="Remove attachment"
              >
                <Trash2 size={13} />
              </button>
            </div>
          </div>
        ))}

        {attachments.length === 0 && (
          <p className="text-xs text-slate-400 italic py-2 text-center">
            No attachments uploaded yet.
          </p>
        )}
      </div>
    </div>
  );
}
