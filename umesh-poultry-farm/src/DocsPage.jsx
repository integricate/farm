import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const documents = [
  {
    id: 1,
    title: 'Tax Clearance Certificate',
    description: 'Official tax clearance document for fiscal year',
    icon: '📄',
    file: null // Will be available when you upload to src/docs folder
  },
  {
    id: 2,
    title: 'Farm Projection Report',
    description: 'Annual farm production and growth projections',
    icon: '📊',
    file: null
  },
  {
    id: 3,
    title: 'Profit & Loss Account',
    description: 'Financial statement showing profits and losses',
    icon: '💰',
    file: null
  },
  {
    id: 4,
    title: 'Business Registration',
    description: 'Official business registration certificate',
    icon: '📋',
    file: null
  },
  {
    id: 5,
    title: 'Quality Certification',
    description: 'Poultry quality and safety certifications',
    icon: '🏅',
    file: null
  },
  {
    id: 6,
    title: 'Annual Report',
    description: 'Comprehensive annual business report',
    icon: '📑',
    file: null
  }
];

function DocsPage() {
  const handleDownload = (doc) => {
    if (doc.file) {
      // If file exists, trigger download
      const link = document.createElement('a');
      link.href = `/src/docs/${doc.file}`;
      link.download = doc.file;
      link.click();
    } else {
      alert(`Document "${doc.title}" will be available soon. Please upload the file to the src/docs folder.`);
    }
  };

  return (
    <div className="docs-page">
      <div className="docs-container">
        <div className="docs-header">
          <h1 className="section-title">Documents</h1>
          <p className="section-subtitle">
            Official documents and certificates of Umesh Poultry Farm
          </p>
          <p style={{ color: '#666', marginTop: '1rem' }}>
            📁 Upload your documents to the <code style={{ background: '#e0e0e0', padding: '0.2rem 0.5rem', borderRadius: '3px' }}>src/docs</code> folder to make them available for download
          </p>
        </div>
        
        <div className="docs-grid">
          {documents.map((doc) => (
            <div key={doc.id} className="doc-card fade-in visible">
              <div className="doc-icon">{doc.icon}</div>
              <h3>{doc.title}</h3>
              <p>{doc.description}</p>
              <button 
                className={`doc-btn ${!doc.file ? 'disabled' : ''}`}
                onClick={() => handleDownload(doc)}
              >
                {doc.file ? 'Download PDF' : 'Coming Soon'}
              </button>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/" className="btn btn-primary" style={{ background: '#2E7D32', color: 'white' }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DocsPage;
