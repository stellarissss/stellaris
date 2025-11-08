// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Github, Mail, Twitter, Linkedin, MapPin, Briefcase, GraduationCap } from 'lucide-react';

import { Navigation } from '@/components/Navigation';
export default function About(props) {
  const {
    $w,
    style
  } = props;
  return <div style={style} className="min-h-screen bg-gray-50">
      <Navigation currentPage="about" onPageChange={pageId => {
      $w.utils.navigateTo({
        pageId,
        params: {}
      });
    }} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 个人信息卡片 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32"></div>
          <div className="px-8 pb-8">
            <div className="flex items-end -mt-16 mb-6">
              <div className="w-32 h-32 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  博主
                </div>
              </div>
              <div className="ml-6 mb-4">
                <h1 className="text-3xl font-bold text-gray-900">全栈开发工程师</h1>
                <p className="text-gray-600 mt-1">热爱编程，持续学习</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* 基本信息 */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">基本信息</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">前端开发工程师</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">北京，中国</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">计算机科学与技术</span>
                  </div>
                </div>
              </div>

              {/* 社交链接 */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">联系方式</h2>
                <div className="space-y-3">
                  <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
                    <Mail className="w-5 h-5" />
                    <span>contact@myblog.com</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
                    <Github className="w-5 h-5" />
                    <span>github.com/username</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
                    <Twitter className="w-5 h-5" />
                    <span>@username</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600">
                    <Linkedin className="w-5 h-5" />
                    <span>linkedin.com/in/username</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 个人介绍 */}
        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">关于我</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              你好！我是一名充满热情的全栈开发工程师，拥有5年的软件开发经验。我热爱编程，
              喜欢探索新技术，并且乐于分享我的学习心得和经验。
            </p>
            <p className="mb-4">
              我的技术栈主要包括前端技术（React、Vue、TypeScript）和后端技术（Node.js、Python、Java）。
              在日常工作中，我专注于构建高性能、可扩展的 Web 应用程序。
            </p>
            <p className="mb-4">
              除了编程，我还喜欢阅读技术书籍、参与开源项目，以及通过写博客来记录和分享我的学习过程。
              我相信持续学习和知识分享是成为一名优秀开发者的关键。
            </p>
            <h3 className="text-xl font-bold mt-6 mb-3">技能专长</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>前端开发：React、Vue.js、TypeScript、JavaScript</li>
              <li>后端开发：Node.js、Python、Java</li>
              <li>数据库：MySQL、MongoDB、Redis</li>
              <li>云服务：AWS、阿里云、腾讯云</li>
              <li>开发工具：Git、Docker、CI/CD</li>
            </ul>
            <h3 className="text-xl font-bold mt-6 mb-3">兴趣爱好</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>阅读技术书籍和博客</li>
              <li>参与开源项目贡献</li>
              <li>技术分享和演讲</li>
              <li>摄影和旅行</li>
            </ul>
          </div>
        </div>

        {/* 时间线 */}
        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">职业经历</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900">高级前端工程师</h3>
                <span className="text-sm text-gray-500">2021 - 至今</span>
              </div>
              <p className="text-gray-600 mb-1">某科技公司</p>
              <p className="text-gray-700">
                负责公司核心产品的前端架构设计和开发，带领团队完成多个重要项目的交付。
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900">前端开发工程师</h3>
                <span className="text-sm text-gray-500">2019 - 2021</span>
              </div>
              <p className="text-gray-600 mb-1">某互联网公司</p>
              <p className="text-gray-700">
                参与多个Web应用的开发，优化前端性能，提升用户体验。
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900">初级开发工程师</h3>
                <span className="text-sm text-gray-500">2018 - 2019</span>
              </div>
              <p className="text-gray-600 mb-1">某创业公司</p>
              <p className="text-gray-700">
                开始职业生涯，学习和掌握前端开发技能，参与公司产品的开发。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}