import React from 'react';
import './Button.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  ...props
}) {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${loading ? 'btn-loading' : ''}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <span className="spinner"></span>
      ) : null}
      <span className="btn-content">{children}</span>
    </button>
  );
}
