// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';
// @ts-ignore;
import { useToast } from '@/components/ui';

import { Navigation } from '@/components/Navigation';
// 模拟文章数据
const mockArticles = {
  1: {
    id: 1,
    title: 'React 18 新特性详解',
    content: `# React 18 新特性详解

React 18 是 React 历史上最重要的版本之一，它带来了许多令人兴奋的新特性和改进。

## 并发渲染 (Concurrent Rendering)

并发渲染是 React 18 最重要的特性之一。它允许 React 中断渲染过程，优先处理更重要的更新，然后再继续完成被中断的渲染。

### 自动批处理 (Automatic Batching)

在 React 18 中，所有的状态更新都会被自动批处理，无论是在 Promise、setTimeout 还是原生事件处理程序中。

\`\`\`javascript
// React 18 之前：只有在 React 事件中才会批处理
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // 触发两次重新渲染
}, 0);

// React 18：自动批处理
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // 只触发一次重新渲染
}, 0);
\`\`\`

## Suspense 改进

React 18 对 Suspense 进行了改进，现在可以在服务端渲染中使用 Suspense。

## 新的 Hooks

### useId

useId 是一个新的 Hook，用于生成唯一的 ID，特别适用于需要唯一 ID 的可访问性属性。

### useDeferredValue

useDeferredValue 允许你延迟更新 UI 的某些部分。

### useTransition

useTransition 允许你标记某些状态更新为过渡，从而让 React 知道这些更新可以中断。

## 如何升级到 React 18

升级到 React 18 非常简单：

1. 更新依赖包
2. 更新渲染 API
3. 可选：启用并发特性

\`\`\`javascript
// 之前
ReactDOM.render(<App />, document.getElementById('root'));

// React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
\`\`\`

## 总结

React 18 带来的新特性让我们能够构建更好的用户体验。并发渲染、自动批处理等特性都让 React 应用变得更加高效和响应式。`,
    publishDate: '2024-01-15',
    readTime: 8,
    tags: ['React', '前端', 'JavaScript'],
    category: '技术',
    author: '博主'
  },
  2: {
    id: 2,
    title: 'TypeScript 最佳实践',
    content: `# TypeScript 最佳实践

TypeScript 为 JavaScript 带来了类型安全，但在实际项目中如何正确使用 TypeScript？本文分享一些最佳实践。

## 类型定义

### 使用接口而不是类型别名

对于对象类型，优先使用 interface：

\`\`\`typescript
// 好的做法
interface User {
  id: number;
  name: string;
  email: string;
}

// 避免
type User = {
  id: number;
  name: string;
  email: string;
};
\`\`\`

### 使用联合类型

\`\`\`typescript
type Status = 'pending' | 'success' | 'error';
\`\`\`

## 泛型的使用

### 合理使用泛型约束

\`\`\`typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
\`\`\`

## 配置最佳实践

### 严格的 tsconfig.json

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true
  }
}
\`\`\`

## 总结

TypeScript 的正确使用可以大大提高代码质量和开发效率。`,
    publishDate: '2024-01-10',
    readTime: 6,
    tags: ['TypeScript', '前端', '最佳实践'],
    category: '技术',
    author: '博主'
  }
};
export default function Post(props) {
  const {
    $w,
    style
  } = props;
  const {
    toast
  } = useToast();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const articleId = props.$w.page.dataset.params.id;
    if (articleId && mockArticles[articleId]) {
      setArticle(mockArticles[articleId]);
    } else {
      toast({
        title: "文章不存在",
        description: "您访问的文章不存在或已被删除",
        variant: "destructive"
      });
      $w.utils.navigateTo({
        pageId: 'home',
        params: {}
      });
    }
    setLoading(false);
  }, [props.$w.page.dataset.params.id]);
  const handleBack = () => {
    $w.utils.navigateBack();
  };
  if (loading) {
    return <div style={style} className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">加载中...</p>
        </div>
      </div>;
  }
  if (!article) {
    return <div style={style} className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-lg">文章不存在</p>
          <button onClick={() => $w.utils.navigateTo({
          pageId: 'home',
          params: {}
        })} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            返回首页
          </button>
        </div>
      </div>;
  }
  return <div style={style} className="min-h-screen bg-gray-50">
      <Navigation currentPage="post" onPageChange={pageId => {
      $w.utils.navigateTo({
        pageId,
        params: {}
      });
    }} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 返回按钮 */}
        <button onClick={handleBack} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>返回</span>
        </button>

        {/* 文章内容 */}
        <article className="bg-white rounded-lg shadow-sm">
          <div className="p-8">
            {/* 文章头部信息 */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {article.title}
              </h1>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.publishDate).toLocaleDateString('zh-CN')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} 分钟阅读</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {article.tags.map(tag => <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>)}
              </div>
            </div>

            {/* 文章正文 */}
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-gray-900">{paragraph.slice(2)}</h1>;
              } else if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-6 mb-3 text-gray-800">{paragraph.slice(3)}</h2>;
              } else if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-bold mt-4 mb-2 text-gray-800">{paragraph.slice(4)}</h3>;
              } else if (paragraph.startsWith('```')) {
                return <pre key={index} className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4">
                      <code className="text-sm text-gray-800">{paragraph.slice(3)}</code>
                    </pre>;
              } else if (paragraph.trim() === '') {
                return <br key={index} />;
              } else {
                return <p key={index} className="text-gray-700 leading-relaxed mb-4">{paragraph}</p>;
              }
            })}
            </div>
          </div>
        </article>
      </div>
    </div>;
}