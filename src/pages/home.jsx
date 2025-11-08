// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { useToast } from '@/components/ui';

import { Navigation } from '@/components/Navigation';
import { ArticleCard } from '@/components/ArticleCard';
// 模拟文章数据
const mockArticles = [{
  id: 1,
  title: 'React 18 新特性详解',
  excerpt: 'React 18 带来了许多令人兴奋的新特性，包括并发渲染、自动批处理、Suspense 改进等。本文将详细介绍这些新特性以及如何在项目中使用它们。',
  content: 'React 18 是 React 历史上最重要的版本之一...',
  publishDate: '2024-01-15',
  readTime: 8,
  tags: ['React', '前端', 'JavaScript'],
  category: '技术'
}, {
  id: 2,
  title: 'TypeScript 最佳实践',
  excerpt: 'TypeScript 为 JavaScript 带来了类型安全，但在实际项目中如何正确使用 TypeScript？本文分享一些最佳实践和常见陷阱。',
  content: 'TypeScript 已经成为现代前端开发的标准...',
  publishDate: '2024-01-10',
  readTime: 6,
  tags: ['TypeScript', '前端', '最佳实践'],
  category: '技术'
}, {
  id: 3,
  title: '构建高性能的 Web 应用',
  excerpt: '性能优化是 Web 开发中的重要话题。本文将从多个角度探讨如何构建高性能的 Web 应用，包括代码优化、资源加载、缓存策略等。',
  content: '在当今的 Web 开发中，性能优化至关重要...',
  publishDate: '2024-01-05',
  readTime: 10,
  tags: ['性能优化', 'Web', '最佳实践'],
  category: '技术'
}, {
  id: 4,
  title: '我的编程学习之路',
  excerpt: '回顾我的编程学习历程，从最初的 Hello World 到现在的全栈开发，分享一些学习心得和经验。',
  content: '编程学习是一段充满挑战和收获的旅程...',
  publishDate: '2024-01-01',
  readTime: 5,
  tags: ['学习', '经验分享', '个人成长'],
  category: '生活'
}];
export default function Home(props) {
  const {
    $w,
    style
  } = props;
  const {
    toast
  } = useToast();
  const [articles, setArticles] = useState(mockArticles);
  const [filteredArticles, setFilteredArticles] = useState(mockArticles);
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const categories = ['全部', '技术', '生活', '随笔'];
  const handleCategoryFilter = category => {
    setSelectedCategory(category);
    if (category === '全部') {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter(article => article.category === category);
      setFilteredArticles(filtered);
    }
  };
  const handleReadArticle = article => {
    $w.utils.navigateTo({
      pageId: 'post',
      params: {
        id: article.id
      }
    });
  };
  return <div style={style} className="min-h-screen bg-gray-50">
      <Navigation currentPage="home" onPageChange={pageId => {
      $w.utils.navigateTo({
        pageId,
        params: {}
      });
    }} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 个人信息区域 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              博主
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">欢迎来到我的博客</h2>
              <p className="text-gray-600 mt-1">分享技术、记录生活、持续学习</p>
            </div>
          </div>
        </div>

        {/* 分类筛选 */}
        <div className="flex space-x-4 mb-8">
          {categories.map(category => <button key={category} onClick={() => handleCategoryFilter(category)} className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
              {category}
            </button>)}
        </div>

        {/* 文章列表 */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {filteredArticles.map(article => <ArticleCard key={article.id} article={article} onRead={handleReadArticle} />)}
        </div>

        {filteredArticles.length === 0 && <div className="text-center py-12">
            <p className="text-gray-500 text-lg">暂无相关文章</p>
          </div>}
      </div>
    </div>;
}