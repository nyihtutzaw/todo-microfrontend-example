function ListItem({ children }) {
  return (
    <div className="border border-gray-300 rounded-lg shadow-sm p-4 hover:bg-gray-100 transition duration-300">
      {children}
    </div>
  );
}

export default ListItem;
