import React from 'react';

interface SectionProps {
  color: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ color, children }) => (
  <div className={`snap-start h-screen ${color} flex items-center justify-center`}>
    {children}
  </div>
);

const SnapScrollPage: React.FC = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
      <Section color="bg-red-200">
        <h2 className="text-4xl font-bold">Section 1</h2>
      </Section>
      <Section color="bg-blue-200">
        <h2 className="text-4xl font-bold">Section 2</h2>
      </Section>
      <Section color="bg-green-200">
        <h2 className="text-4xl font-bold">Section 3</h2>
      </Section>
    </div>
  );
};

export default SnapScrollPage;