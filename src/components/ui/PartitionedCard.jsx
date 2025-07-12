// A Card component with 3 partitions separated by vertical lines
export function PartitionedCard({ children, className = "", ...props }) {
  // children: array of 3 React nodes or strings
  const childrenArray = Array.isArray(children) ? children : [children];
  return (
    <div
      className={`bg-red-50 rounded-xl overflow-hidden shadow-[0_24px_120px_0_rgba(244,63,94,0.18),0_4px_32px_0_rgba(0,0,0,0.06),inset_0_1px_4px_0_rgba(255,255,255,0.7)] flex flex-row divide-x divide-stone-200 ${className}`}
      {...props}
    >
      {childrenArray.map((child, idx) => (
        <div key={idx} className="basis-1/3 px-3 py-1 flex items-center justify-center text-center">
          {child}
        </div>
      ))}
    </div>
  );
}