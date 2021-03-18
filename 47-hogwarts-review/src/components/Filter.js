function Filter({
  isShowingOnlyGreased,
  onToggleShowingGreased,
  sortBy,
  onSortChange,
}) {
  return (
    <div>
      <h1>Filter</h1>
      <label>
        Show Only Greased
        <input
          type="checkbox"
          checked={isShowingOnlyGreased}
          onChange={(e) => onToggleShowingGreased(e.target.checked)}
        />
      </label>
      <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="weight">Sort by Weight</option>
      </select>
    </div>
  );
}

export default Filter;
