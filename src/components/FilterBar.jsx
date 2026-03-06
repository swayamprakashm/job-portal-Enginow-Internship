function FilterBar() {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search jobs..."
        className="w-96 p-3 rounded-xl bg-[#e0e0e0]
        shadow-[inset_6px_6px_10px_#bebebe,inset_-6px_-6px_10px_#ffffff]
        outline-none"
      />
    </div>
  );
}

export default FilterBar;