import React from 'react';
import { Footer, Header, LearnMore, Intro, NFTlist, Partner} from './components';
import './App.css'
import './index.css';


const App = () => {
  return (
    <div className='App'>
      <Header />
      <Intro />
      <Partner />
      <NFTlist />
      <LearnMore />
      <Footer />
    </div>
  )
}

export default App;