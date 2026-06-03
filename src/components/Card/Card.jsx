import React from 'react';
import './Card.css';

export default function Card({
  title,
  description,
  badge,
  badgeColor = 'primary',
  imageSrc,
  actions,
}) {
  return (
    <div className="card">
      {imageSrc ? (
        <div className="card-image-wrapper">
          <img src={imageSrc} alt={title} className="card-image" />
        </div>
      ) : (
        <div className="card-placeholder-graphic">
          <span className="card-graphic-icon">🔮</span>
        </div>
      )}
      
      <div className="card-body">
        <div className="card-header-row">
          {badge ? (
            <span className={`card-badge card-badge-${badgeColor}`}>{badge}</span>
          ) : null}
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        
        {actions ? (
          <div className="card-actions">
            {actions}
          </div>
        ) : null}
      </div>
    </div>
  );
}
