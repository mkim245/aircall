import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Topbox from './Topbox.jsx';
import Bottom from './Bottom.jsx';
import { Getapi } from './Getapi';

const App = () => {
  // useEffect(() => {
  //   Getapi(`channels?part=snippet&id=${id}`)
  //     .then((data) => setChannelDetail(data?.items[0]));
  //   fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
  //     .then((data) => setVideos(data?.items));
  // }, [id])
  return (
    <div className='container'>
      <Header/>
      <Navbar/>
      <Topbox/>
      <div className="container-view">Some activities should be here</div>
      <Bottom/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
