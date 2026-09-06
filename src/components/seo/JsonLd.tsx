import React from 'react';

export const JsonLd: React.FC = () => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Puthalath Raghavan',
    alternateName: ['Raghavan Master', 'Raghavettan'],
    jobTitle: 'Boxing Coach, Mentor, Yoga Practitioner, Sculptor',
    description: 'Renowned boxing coach from Pooladikunnu, Kozhikode, Kerala who spent four decades training over 2,000 boxers and yoga practitioners.',
    knowsAbout: ['Boxing', 'Yoga', 'Wrestling', 'Sculpture', 'Sports Administration'],
    homeLocation: {
      '@type': 'Place',
      name: 'Pooladikunnu, Kozhikode, Kerala, India'
    },
    memberOf: [
      {
        '@type': 'Organization',
        name: 'Kerala Boxing Association',
        roleName: 'Vice President'
      },
      {
        '@type': 'Organization',
        name: 'Friends Cultural Society',
        roleName: 'Founder'
      }
    ]
  };

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: 'Friends Cultural Society Boxing & Yoga Academy',
    alternateName: 'FCS Pooladikunnu',
    description: 'Traditional boxing training center and legacy archive founded by Puthalath Raghavan in Pooladikunnu, Kozhikode.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pooladikunnu, Kozhikode',
      addressRegion: 'Kerala',
      addressCountry: 'India'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 11.3125,
      longitude: 75.7873
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
    </>
  );
};
