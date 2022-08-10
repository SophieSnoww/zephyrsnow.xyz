import './WikiInfobox.css';

function WikiInfobox (props) {
  const infoElements = [];

  for (let i = 0; i < props.info.length; i++) {
    infoElements.push(
      <div className='info-line'>
        <div className='info-title'>{props.info[i][0]}</div>
        <div className='info-desc'>{props.info[i][1]}</div>
      </div>
    );
  }

  return (
    <div className='wiki-info-box'>
      <div className='title'>{props.title}</div>
      <div className='image-container'>
        <img src={props.img} />
        <div className='image-subtitle'>{props.imgSubtitle}</div>
      </div>
      <div className='info-container'>
        {infoElements}
      </div>
    </div>
  );
}

export default WikiInfobox;
