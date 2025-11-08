// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Folder, FileText } from 'lucide-react';

import { Navigation } from '@/components/Navigation';
import { ArticleCard } from '@/components/ArticleCard';
// 模拟分类数据
const categories = [{
  id: 'tech',
  name: '技术',
  description: '技术文章、教程和最佳实践',
  count: 15,
  color: 'blue'
}, {
  id: 'life',
  name: '生活',
  description: '生活感悟、随笔和日常记录',
  count: 8,
  color: 'green'
}, {
  id: 'essay',
  name: '随笔',
  description: '个人思考和观点分享',
  count: 12,
  color: 'purple'
}];

// 模拟文章数据
const mockArticles = [{
  id: 1,
  title: 'React 18 新特性详解',
  excerpt: 'React 18 带来了许多令人兴奋的新特性，包括并发渲染、自动批处理、Suspense 改进等。',
  publishDate: '2024-01-15',
  readTime: 8,
  tags: ['React', '前端', 'JavaScript'],
  category: '技术'
}, {
  id: 2,
  title: 'TypeScript 最佳实践',
  excerpt: 'TypeScript 为 JavaScript 带来了类型安全，但在实际项目中如何正确使用 TypeScript？',
  publishDate: '2024-01-10',
  readTime: 6,
  tags: ['TypeScript', '前端', '最佳实践'],
  category: '技术'
}, {
  id: 4,
  title: '我的编程学习之路',
  excerpt: '回顾我的编程学习历程，从最初的 Hello World 到现在的全栈开发，分享一些学习心得和经验。',
  publishDate: '2024-01-01',
  readTime: 5,
  tags: ['学习', '经验分享', '个人成长'],
  category: '生活'
}];
export default function Category(props) {
  const {
    $w,
    style
  } = props;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [articles, setArticles] = useState([]);
  const handleCategorySelect = category => {
    setSelectedCategory(category);
    const filtered = mockArticles.filter(article => article.category === category.name);
    setArticles(filtered);
  };
  const handleReadArticle = article => {
    $w.utils.navigateTo({
      pageId: 'post',
      params: {
        id: article.id
      }
    });
  };
  const getColorClasses = color => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-800 border-blue-200',
      green: 'bg-green-100 text-green-800 border-green-200',
      purple: 'bg-purple-100 text-purple-800 border-purple-200'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-800 border-gray-200';
  };
  return <div style={style} className="min-h-screen bg-gray-50">
          <Navigation currentPage="category" onPageChange={pageId => {
      $w.utils.navigateTo({
        pageId,
        params: {}
      });
    }} />
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {!selectedCategory ? <>
                {/* 页面标题 */}
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">文章分类</h1>
                  <p className="text-gray-600">按分类浏览所有文章</p>
                </div>

                {/* 分类网格 */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories.map(category => <div key={category.id} onClick={() => handleCategorySelect(category)} className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 cursor-pointer border-2 ${getColorClasses(category.color)}`}>
                      <div className="flex items-center justify-between mb-4">
                        <Folder className="w-8 h-8" />
                        <span className="text-2xl font-bold">{category.count}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm opacity-80">{category.description}</p>
                      <div className="mt-4 flex items-center text-sm font-medium">
                        <span>查看文章</span>
                        <FileText className="w-4 h-4 ml-2" />
                      </div>
                    </div>)}
                </div>

                {/* 统计信息 */}
                <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">博客统计</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">35</div>
                      <div className="text-gray-600 mt-1">总文章数</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">3</div>
                      <div className="text-gray-600 mt-1">分类数</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">12</div>
                      <div className="text-gray-600 mt-1">标签数</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">1.2k</div>
                      <div className="text-gray-600 mt-1">总访问量</div>
                    </div>
                  </div>
                </div>
              </> : <>
                {/* 返回按钮 */}
                <button onClick={() => setSelectedCategory(null)} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6">
                  <span>← 返回分类</span>
                </button>

                {/* 分类标题 */}
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedCategory.name}</h1>
                  <p className="text-gray-600">{selectedCategory.description}</p>
                  <p className="text-sm text-gray-500 mt-2">共 {articles.length} 篇文章</p>
                </div>

                {/* 文章列表 */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
                  {articles.map(article => <ArticleCard key={article.id} article={article} onRead={handleReadArticle} />)}
                </div>

                {articles.length === 0 && <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">该分类暂无文章</p>
                  </div>}
              </>}
          </div>
        </div>;
}