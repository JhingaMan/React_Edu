export default function Stats({ items }) {
  const numItems = items.length;
  const numItemChecked = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((numItemChecked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "you got everything on your list"
          : `You have ${numItems} items on your list, and you are already packed
        ${numItemChecked} (${percentagePacked}%)`}
      </em>
    </footer>
  );
}
