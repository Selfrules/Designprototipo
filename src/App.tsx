import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { JourneySection } from './components/JourneySection';
import { WhatImUpToSection } from './components/WhatImUpToSection';
import { BlogSection, BlogPost } from './components/BlogSection';
import { BlogPage } from './components/BlogPage';
import { BlogArticle } from './components/BlogArticle';
import { WorkTogetherSection } from './components/WorkTogetherSection';
import { AskMeSection } from './components/AskMeSection';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { LoginPage } from './components/admin/LoginPage';
import { AdminLayout } from './components/admin/AdminLayout';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { ArticleCreator } from './components/admin/ArticleCreator';
import { ConversationManager } from './components/admin/ConversationManager';
import { Analytics } from './components/admin/Analytics';
import { DesignSystemPage } from './components/DesignSystemPage';

type ViewType = 'home' | 'blog' | 'article' | 'admin' | 'design-system';
type AdminView = 'dashboard' | 'articles' | 'conversations' | 'analytics';

export default function App() {
  const [language, setLanguage] = useState<'IT' | 'EN'>('IT');
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminView, setAdminView] = useState<AdminView>('dashboard');

  // Check URL for admin access
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true') {
      setCurrentView('admin');
    }
  }, []);

  const handleArticleClick = (article: BlogPost) => {
    setSelectedArticle(article);
    setCurrentView('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewAllArticles = () => {
    setCurrentView('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBlog = () => {
    setCurrentView('blog');
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAdminLogin = () => {
    setIsAdminAuthenticated(true);
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    setCurrentView('home');
    setAdminView('dashboard');
    // Remove admin param from URL
    window.history.replaceState({}, '', window.location.pathname);
  };

  const handleAdminNavigate = (view: AdminView) => {
    setAdminView(view);
  };

  const handleAdminAccess = () => {
    setCurrentView('admin');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDesignSystemAccess = () => {
    setCurrentView('design-system');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show admin section
  if (currentView === 'admin') {
    if (!isAdminAuthenticated) {
      return <LoginPage onLogin={handleAdminLogin} />;
    }

    const renderAdminContent = () => {
      switch (adminView) {
        case 'dashboard':
          return <AdminDashboard onNavigate={handleAdminNavigate} />;
        case 'articles':
          return <ArticleCreator />;
        case 'conversations':
          return <ConversationManager />;
        case 'analytics':
          return <Analytics />;
        default:
          return <AdminDashboard onNavigate={handleAdminNavigate} />;
      }
    };

    return (
      <AdminLayout
        currentView={adminView}
        onViewChange={setAdminView}
        onLogout={handleAdminLogout}
      >
        {renderAdminContent()}
      </AdminLayout>
    );
  }

  // Show article view
  if (currentView === 'article' && selectedArticle) {
    return (
      <BlogArticle 
        article={selectedArticle} 
        onBack={handleBackToBlog}
        currentLang={language}
        onLanguageChange={setLanguage}
      />
    );
  }

  // Show blog page view
  if (currentView === 'blog') {
    return (
      <>
        <Header 
          currentLang={language} 
          onLanguageChange={setLanguage}
          onLogoClick={handleBackToHome}
          onViewAllArticles={handleViewAllArticles}
        />
        <BlogPage 
          onArticleClick={handleArticleClick}
          onBackToHome={handleBackToHome}
        />
        <Footer onAdminClick={handleAdminAccess} onDesignSystemClick={handleDesignSystemAccess} />
        <ChatBot />
      </>
    );
  }

  // Show design system page
  if (currentView === 'design-system') {
    return (
      <DesignSystemPage onBack={handleBackToHome} />
    );
  }

  // Show home view (default)
  return (
    <main className="min-h-screen">
      {/* Header - Navigation */}
      <Header 
        currentLang={language} 
        onLanguageChange={setLanguage}
        onLogoClick={handleBackToHome}
        onViewAllArticles={handleViewAllArticles}
      />
      
      {/* Hero - L'inizio della storia */}
      <HeroSection />
      
      {/* Journey - Il percorso cronologico */}
      <JourneySection />
      
      {/* What I'm Up To - Presente */}
      <WhatImUpToSection />
      
      {/* Blog - Condivisione conoscenza */}
      <BlogSection 
        onArticleClick={handleArticleClick}
        onViewAllClick={handleViewAllArticles}
      />
      
      {/* Work Together - Call to action */}
      <WorkTogetherSection />
      
      {/* Ask Me - Interazione */}
      <AskMeSection />
      
      {/* Footer - Chiusura */}
      <Footer onAdminClick={handleAdminAccess} onDesignSystemClick={handleDesignSystemAccess} />

      {/* Floating ChatBot */}
      <ChatBot />
    </main>
  );
}