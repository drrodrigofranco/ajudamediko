import React from 'react';
import { ChatMessage } from '../types';
import { User, Bot, FileText, Link as LinkIcon, LoaderCircle } from 'lucide-react';

interface MessageProps {
    message: ChatMessage;
    isLoading?: boolean;
}

const ModelResponseLoader: React.FC = () => (
    <div className="flex items-center space-x-3">
        <LoaderCircle className="animate-spin text-blue-600" size={20} />
        <div className="flex items-center space-x-1">
          <span className="h-2 w-2 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
	        <span className="h-2 w-2 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
	        <span className="h-2 w-2 bg-gray-300 rounded-full animate-bounce"></span>
        </div>
    </div>
);

// A simple utility to parse markdown-like text and convert it to HTML
// NOTE: For production, a more robust library like 'marked' or 'react-markdown' would be better.
// However, for this self-contained example, we use a simple parser.
const parseMarkdown = (text: string) => {
    // This is a very basic parser. It handles paragraphs, bold, and lists.
    const html = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
        .split('\n\n').map(p => `<p>${p}</p>`).join('') // Paragraphs
        .replace(/<p>\s*[-*]\s(.*?)(?=\n\s*[-*]|$)/g, '<ul><li>$1</li></ul>') // Lists (simple)
        .replace(/<\/ul>\s*<ul>/g, ''); // Merge consecutive lists

    return { __html: html };
}

const Message: React.FC<MessageProps> = ({ message, isLoading = false }) => {
    const isModel = message.role === 'model';

    if (isModel) {
        return (
            <div className="flex items-start space-x-4 max-w-full lg:max-w-4xl">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full">
                    <Bot size={20} />
                </div>
                <div className="flex-1 bg-gray-100 rounded-lg rounded-tl-none p-4">
                    {isLoading ? <ModelResponseLoader /> : 
                        <>
                            <div className="prose prose-sm max-w-none text-gray-800" dangerouslySetInnerHTML={parseMarkdown(message.text)}></div>
                            {message.sources && message.sources.length > 0 && (
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <h4 className="text-sm font-semibold mb-2 flex items-center text-gray-700">
                                        <FileText size={16} className="mr-2" />
                                        Fontes
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                        {message.sources.slice(0, 3).map((source, index) => (
                                            <a
                                                key={index}
                                                href={source.uri}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block p-2 border border-gray-200 bg-white rounded-md hover:bg-gray-50 hover:border-blue-400 transition-colors"
                                            >
                                                <div className="flex items-start space-x-2">
                                                    <LinkIcon size={14} className="mr-1 mt-1 flex-shrink-0 text-gray-400" />
                                                    <p className="text-xs text-blue-600 font-medium break-all line-clamp-2">
                                                        {source.title}
                                                    </p>
                                                </div>
                                            </a>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </>
                    }
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-start justify-end space-x-4">
            <div className="flex-1 bg-blue-600 text-white rounded-lg rounded-tr-none p-4 max-w-full lg:max-w-4xl">
                <div className="prose prose-sm max-w-none text-white prose-strong:text-white" dangerouslySetInnerHTML={parseMarkdown(message.text)}></div>
            </div>
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-300 text-gray-700 rounded-full">
                <User size={20} />
            </div>
        </div>
    );
};

export default Message;