import './WikiTOC.css';

function createList (array, fromList = false, number = undefined, subset = 0) {
  const elements = [];

  for (let i = 1; i <= array.length; i++) {
    if (typeof array[i - 1] === 'string') {
      elements.push(
        <li
          style={{
            paddingLeft: `${subset * 25}px`
          }}
        >
          {fromList ? `${number}.${i}` : i} <a href={`#${array[i - 1]}`}>{array[i - 1]}</a>
        </li>
      );
    } else {
      elements.push(
        createList(array[i - 1], true, (fromList ? `${number}.${i - 1}` : i - 1), (fromList ? subset + 1 : 1))
      );
    }
  }

  return elements;
}

function WikiTOC (props) {
  const elements = createList(props.items);

  return (
    <div className='table-of-contents'>
      <div className='toc-title'>Contents</div>
      <ul className='toc-list'>
        {elements}
      </ul>
    </div>
  );
}

export default WikiTOC;
