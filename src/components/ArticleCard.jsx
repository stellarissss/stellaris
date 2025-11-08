
    import React from 'react';
    { Calendar, Clock, Tag } from 'lucide-react';

    export function ArticleCard({ article, onRead }) {
      return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer" onClick={() => onRead(article)}>
          <div className="p-6">
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(article.publishDate).toLocaleDateString('zh-CN')}</span>
              <Clock className="w-4 h-4 ml-4" />
              <span>{article.readTime} 分钟阅读</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
              {article.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                阅读更多 →
              </span>
            </div>
          </div>
        </div>
      );
    }
  