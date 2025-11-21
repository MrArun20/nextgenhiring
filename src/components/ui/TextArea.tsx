import { forwardRef, TextareaHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const textareaId = id || `textarea-${label?.toLowerCase().replace(/\s+/g, '-')}`;

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={textareaId} className="block text-sm font-medium text-gray-200 mb-2">
            {label}
            {props.required && <span className="text-accent ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            'w-full px-4 py-3 rounded-lg bg-surface/50 border border-gray-700 text-white placeholder-gray-400',
            'focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent',
            'transition-all duration-200 resize-vertical',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          rows={4}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
