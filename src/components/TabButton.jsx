const TabButton = ({ children, _onClick, isSelected }) => {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={_onClick}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
