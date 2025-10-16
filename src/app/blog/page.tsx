import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Construction Blog - Tips, Trends & Industry Insights',
  description: 'Stay updated with the latest construction trends, home renovation tips, and industry insights from BuildCraft Construction experts. Learn about smart building solutions and design inspiration.',
  keywords: ['construction blog', 'home renovation tips', 'construction trends', 'building advice', 'construction insights', 'home design'],
};

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Signs You Need a Home Renovation",
      excerpt: "Discover the key indicators that your home is ready for a renovation, from outdated fixtures to structural issues that need attention.",
      category: "Renovation",
      author: "Sarah Chen",
      date: "December 15, 2024",
      readTime: "5 min read",
      image: "/blog-renovation.jpg",
      featured: true
    },
    {
      id: 2,
      title: "What to Expect During a Remodel",
      excerpt: "A comprehensive guide to the remodeling process, including timelines, what to expect, and how to prepare for your home renovation project.",
      category: "News",
      author: "Michael Rodriguez",
      date: "December 10, 2024",
      readTime: "7 min read",
      image: "/blog-remodel.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Top Trends in Texas Home Design",
      excerpt: "Explore the latest home design trends popular in Texas, from modern farmhouse styles to energy-efficient features that suit the climate.",
      category: "Insights",
      author: "David Thompson",
      date: "December 5, 2024",
      readTime: "6 min read",
      image: "/blog-trends.jpg",
      featured: false
    },
    {
      id: 4,
      title: "How to Plan Your Dream Home",
      excerpt: "Step-by-step guide to planning your custom home, from choosing the right location to selecting materials and finishes that match your lifestyle.",
      category: "Home Design",
      author: "Lisa Martinez",
      date: "November 28, 2024",
      readTime: "8 min read",
      image: "/blog-dream-home.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Energy-Efficient Construction Methods",
      excerpt: "Learn about sustainable building practices and energy-efficient construction methods that can reduce your home's environmental impact and utility costs.",
      category: "Sustainability",
      author: "Sarah Chen",
      date: "November 20, 2024",
      readTime: "6 min read",
      image: "/blog-energy.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Choosing the Right Contractor",
      excerpt: "Essential tips for selecting the right construction contractor for your project, including questions to ask and red flags to watch for.",
      category: "Advice",
      author: "Michael Rodriguez",
      date: "November 15, 2024",
      readTime: "5 min read",
      image: "/blog-contractor.jpg",
      featured: false
    }
  ];

  const categories = [
    "All Posts",
    "Renovation", 
    "News",
    "Insights",
    "Home Design",
    "Sustainability",
    "Advice"
  ];

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-gray-50 hero-curve hero-curve-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                Insights, Ideas & Building Smarter
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                Welcome to the BuildCraft Blog — your go-to resource for construction tips, design inspiration, 
                renovation advice, and smart building solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary text-lg px-8 py-4">
                  Subscribe to Updates
                </button>
                <button className="btn-outline text-lg px-8 py-4">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                  Featured Article
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="image-placeholder image-placeholder-lg">
                    <div className="image-content">
                      <div className="image-icon image-icon-lg">
                        <span className="text-white text-3xl">📝</span>
                      </div>
                      <p className="image-title">{featuredPost.title}</p>
                      <p className="image-subtitle">Featured blog post image</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{featuredPost.date}</span>
                    </div>
                  </div>
                  <button className="btn-primary flex items-center space-x-2">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Categories */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Browse by Category
              </h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    category === "All Posts"
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="image-placeholder image-placeholder-sm">
                    <div className="image-content">
                      <div className="image-icon image-icon-sm">
                        <span className="text-white text-lg">📄</span>
                      </div>
                      <p className="image-subtitle">Blog post image</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Stay Updated with BuildCraft
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest construction tips, industry insights, and project inspiration delivered to your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                />
                <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-blue-100 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Popular Topics
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our most popular construction and home improvement topics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { topic: "Home Renovation", posts: "12 articles", icon: "🏠" },
                { topic: "Construction Tips", posts: "8 articles", icon: "🔨" },
                { topic: "Design Trends", posts: "15 articles", icon: "🎨" },
                { topic: "Energy Efficiency", posts: "6 articles", icon: "⚡" }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-50 transition-colors">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.topic}</h3>
                  <p className="text-sm text-gray-600">{item.posts}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
