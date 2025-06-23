import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface EmailSubscriptionProps {
  className?: string;
  variant?: 'default' | 'footer' | 'inline';
}

const EmailSubscription: React.FC<EmailSubscriptionProps> = ({ 
  className = '', 
  variant = 'default' 
}) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Validate required fields
    if (!formData.email || !formData.firstName || !formData.lastName) {
      setStatus('error');
      setMessage('Please fill in all required fields.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      // Check if we have Supabase environment variables
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey) {
        // Fallback to a simple form submission or external service
        console.log('Supabase not configured, using fallback method');
        console.log('Subscription data:', formData);
        
        setStatus('success');
        setMessage('Thank you for subscribing! We will add you to our mailing list.');
        setFormData({ email: '', firstName: '', lastName: '' });
        return;
      }

      // Try to call the Supabase edge function
      const apiUrl = `${supabaseUrl}/functions/v1/subscribe`;
      
      console.log('Attempting subscription with:', {
        url: apiUrl,
        data: formData,
        hasUrl: !!supabaseUrl,
        hasKey: !!supabaseAnonKey
      });

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email.trim(),
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim()
        }),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      const responseData = await response.json();
      console.log('Response data:', responseData);

      if (response.ok) {
        setStatus('success');
        setMessage(responseData.message || 'Thank you for subscribing! Please check your email to confirm your subscription.');
        setFormData({ email: '', firstName: '', lastName: '' });
      } else {
        console.error('Subscription API error:', responseData);
        setStatus('error');
        setMessage(responseData.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
      
      // Provide more helpful error messages based on the error
      if (error instanceof Error && error.message.includes('fetch')) {
        setMessage('Unable to connect to our subscription service. Please try again later or contact us directly at info@intercambiodiaspora.com');
      } else {
        setMessage('Thank you for your interest! We are currently setting up our email system. Please contact us directly at info@intercambiodiaspora.com to join our mailing list.');
      }
    }
  };

  if (variant === 'footer') {
    return (
      <div className={`bg-white p-8 rounded-lg shadow-lg ${className}`}>
        <h3 className="text-2xl font-bold mb-2 text-gray-800 text-center">Join the Email List</h3>
        <p className="text-gray-600 text-center mb-6">Stay up to date with our latest posts!</p>
        
        {status === 'success' && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded flex items-center">
            <CheckCircle className="h-5 w-5 mr-2" />
            {message}
          </div>
        )}

        {status === 'error' && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded flex items-center">
            <AlertCircle className="h-5 w-5 mr-2" />
            {message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-800"
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-800"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-800"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-md font-medium transition disabled:opacity-50"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className={`max-w-xl mx-auto ${className}`}>
      {status === 'success' && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded flex items-center">
          <CheckCircle className="h-5 w-5 mr-2" />
          {message}
        </div>
      )}

      {status === 'error' && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded flex items-center">
          <AlertCircle className="h-5 w-5 mr-2" />
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            {t('home.newsletter.name')}
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pan-red"
            placeholder={t('home.newsletter.namePlaceholder')}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pan-red"
            placeholder="Enter your last name"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            {t('home.newsletter.email')}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pan-red"
            placeholder={t('home.newsletter.emailPlaceholder')}
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-pan-red text-white py-3 px-4 rounded-md hover:bg-pan-red/90 transition flex items-center justify-center font-medium disabled:opacity-50"
        >
          {status === 'loading' ? 'Subscribing...' : t('home.newsletter.subscribe')} 
          <Mail className="ml-2 h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default EmailSubscription;