export default function StatCard({ title, value }) {
  return (
    <div className="
      bg-white 
      rounded-xl 
      shadow-sm 
      p-3 
      sm:p-5
      flex 
      flex-col 
      justify-between
    ">
      <p className="text-[11px] sm:text-sm text-gray-500 leading-tight">
        {title}
      </p>

      <h3 className="text-lg sm:text-2xl font-bold text-gray-800">
        {value}
      </h3>
    </div>
  );
}
