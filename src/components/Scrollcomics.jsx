import React from 'react';

const defaultItems = [
  'React',
  'Tailwind CSS',
  'TypeScript',
  'Next.js',
  'Node.js',
  'GraphQL',
  'PostgreSQL',
  'Docker',
];

export default function InfiniteScroll({ items = defaultItems, speed = '25s' }) {
  return (
    <div className="w-full py-10 bg-slate-900 overflow-hidden flex flex-col justify-center">
      {/* Outer wrapper with edge gradient masking */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        
        {/* Animated track: double width (-50% translation) */}
        <div
          className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]"
          style={{ animationDuration: speed }}
        >
          {/* First set of items */}
          <div className="flex space-x-6 pr-6">
            {items.map((item, idx) => (
              <ScrollCard key={`set1-${idx}`} text={item} />
            ))}
          </div>

          {/* Duplicate set for seamless looping (aria-hidden for accessibility) */}
          <div className="flex space-x-6 pr-6" aria-hidden="true">
            {items.map((item, idx) => (
              <ScrollCard key={`set2-${idx}`} text={item} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// Card component inside the scroll
function ScrollCard({ text }) {
  return (
    <div className="flex items-center justify-center px-6 py-4 bg-slate-800 border border-slate-700/60 rounded-xl shadow-md text-slate-200 font-semibold text-lg hover:border-indigo-500 hover:text-indigo-400 transition-colors cursor-pointer select-none">
      {text}
    </div>
  );
}