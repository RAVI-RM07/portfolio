import { useState, useEffect } from 'react';
import { Newspaper, Clock, ExternalLink, MessageSquare, AlertCircle, Loader2 } from 'lucide-react';

const TechNews = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                // 1. Get top stories IDs
                const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
                if (!response.ok) throw new Error('Failed to fetch stories');
                const storyIds = await response.json();

                // 2. Fetch details for top 6 stories
                const top6Ids = storyIds.slice(0, 6);
                const storyPromises = top6Ids.map(id =>
                    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json())
                );

                const stories = await Promise.all(storyPromises);
                setNews(stories);
                setError(null);
            } catch (err) {
                console.error("Error fetching news:", err);
                setError('Failed to load latest news. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    const formatTime = (time) => {
        const date = new Date(time * 1000);
        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);

        if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
        return `${Math.floor(diffInSeconds / 86400)}d ago`;
    };

    return (
        <section id="news" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-sm font-medium mb-4">
                            <Newspaper className="h-4 w-4" />
                            Tech News
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Latest from Hacker News</h2>
                        <p className="mt-4 text-gray-600">Top stories from the developer community</p>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <Loader2 className="h-10 w-10 text-blue-600 animate-spin" />
                    </div>
                ) : error ? (
                    <div className="flex flex-col justify-center items-center h-64 text-center rounded-2xl bg-red-50 border border-red-100 p-8">
                        <AlertCircle className="h-10 w-10 text-red-500 mb-4" />
                        <p className="text-red-700 font-medium">{error}</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news.map((item) => (
                            <article
                                key={item.id}
                                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                                        News
                                    </span>
                                    <span className="flex items-center text-gray-400 text-xs font-medium">
                                        <Clock className="h-3 w-3 mr-1" />
                                        {formatTime(item.time)}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex-grow group-hover:text-blue-600 transition-colors line-clamp-2">
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="focus:outline-none">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {item.title}
                                    </a>
                                </h3>

                                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100 text-sm text-gray-500">
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center hover:text-orange-500 transition-colors">
                                            <span className="font-semibold text-gray-900 mr-1">{item.score || 0}</span> points
                                        </span>
                                        <span className="flex items-center hover:text-blue-500 transition-colors">
                                            <MessageSquare className="h-4 w-4 mr-1" />
                                            {item.descendants || 0}
                                        </span>
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                                        <ExternalLink className="h-5 w-5 text-blue-600" />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default TechNews;
