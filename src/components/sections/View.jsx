import React from 'react';

const ViewSection = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 900,
        margin: '0 auto',
        padding: '1rem',
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
        color: '#333',
      }}
    >
      {/* Left: Google rating */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ display: 'flex', color: '#000' }}>
          {/* 5 stars with half star as the last */}
          {[1, 2, 3, 4].map((_) => (
            <svg
              key={_}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              style={{ marginRight: 2 }}
            >
              <path d="M3.612 15.443c-.396.198-.86-.106-.746-.57l.83-4.73L.173 6.765c-.329-.32-.158-.888.283-.95l4.898-.696 2.197-4.45c.197-.397.73-.397.927 0l2.197 4.45 4.898.696c.441.062.612.63.283.95l-3.523 3.378.83 4.73c.114.464-.35.768-.746.57L8 13.187l-4.389 2.256z" />
            </svg>
          ))}
          {/* Half star */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            style={{ marginRight: 4 }}
          >
            <path d="M8 12.027v-9.055l1.27 2.57 2.84.403-2.057 1.973.486 2.837L8 12.027z" />
            <path
              fill="#ccc"
              d="M8 12.027l-4.389 2.256.83-4.73-3.523-3.378 4.898-.696 2.197-4.45V12.027z"
            />
          </svg>
        </div>
        <span style={{ fontWeight: 'bold' }}>4.7/5</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google"
            width="60"
            height="20"
          />
          <span style={{ color: '#666' }}>2.6k reviews</span>
        </div>
      </div>

      {/* Center: Trustpilot rating */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontWeight: 'bold', fontSize: 14, fontStyle: 'italic' }}>'Excellent'</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#2CA72C"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568L24 9.75l-6 5.855 1.414 8.295L12 18.896l-7.414 4.999L6 15.605 0 9.75l8.332-1.595z" />
            </svg>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <img
            src="/assets/deals/google.svg"
            alt="Trustpilot"
            style={{ height: 20 }}
          />
          <span style={{ color: '#666' }}>8k reviews</span>
        </div>
      </div>

      {/* Right: Trusted by members */}
      <div style={{ textAlign: 'right', color: '#444' }}>
        <div style={{ fontSize: '12px', marginBottom: 2 }}>Trusted by</div>
        <div style={{ fontWeight: 'bold', fontSize: '18px' }}>8 million members</div>
      </div>
    </div>
  );
};

export default ViewSection;
