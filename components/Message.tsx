import React from 'react';
import { ChatMessage } from '../types';
import { User, Bot, FileText, Link as LinkIcon, LoaderCircle } from 'lucide-react';

interface MessageProps {
    message: ChatMessage;
    isLoading?: boolean;
}

const ModelResponseLoader: React.FC = () => (
    <div className="flex items-center space-x-2">
        <LoaderCircle className="animate-spin text-blue-600" />
        <span className="text-gray-600 italic">O AJUDAMEDIKO está pensando...</span>
    </div>
);

const Message: React.FC<MessageProps> = ({ message, isLoading = false }) => {
    const isModel = message.role === 'model';
    
    // Simple markdown-like formatting for paragraphs
    const formattedText = message.text.split('\n').map((paragraph, i) => (
        <p key={i} className="mb-2 last:mb-0">{paragraph}</p>
    ));

    if (isModel) {
        return (
            <div className="flex items-start space-x-4 max-w-4xl">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full">
                    <Bot size={20} />
                </div>
                <div className="flex-1 bg-gray-100 rounded-lg p-4">
                    {isLoading ? <ModelResponseLoader /> : 
                        <>
                            <div className="prose prose-sm max-w-none text-gray-800">{formattedText}</div>
                            {message.sources && message.sources.length > 0 && (
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <h4 className="text-sm font-semibold mb-2 flex items-center text-gray-700">
                                        <FileText size={16} className="mr-2" />
                                        Fontes
                                    </h4>
                                    <ul className="space-y-2">
                                        {message.sources.map((source, index) => (
                                            <li key={index} className="flex items-start">
                                                <LinkIcon size={14} className="mr-2 mt-1 flex-shrink-0 text-gray-500" />
                                                <a
                                                    href={source.uri}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs text-blue-600 hover:underline break-all"
                                                >
                                                    {source.title}
                                                </a>
                                            </li>
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
            <div className="flex-1 bg-blue-50 text-gray-800 rounded-lg p-4 max-w-4xl">
                <div className="prose prose-sm max-w-none">{formattedText}</div>
            </div>
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-300 text-gray-700 rounded-full">
                <User size={20} />
            </div>
        </div>
    );
};

export default Message;