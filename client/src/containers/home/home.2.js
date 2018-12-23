import React, { Component } from 'react';
import Search from '../../components/search/search';

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <div>Serial number</div>
          <Search 
              id='serialId'
              name='serial'
              placeholder='Enter serial number'
              query='Submit serial' />
        </div>
        
        <div>
          <div>Unique number</div>
          <Search 
              id='uniqueId'
              name='unique'
              placeholder='Enter key of serial number'
              query='Get Pin' />
        </div>
      </div>
    )
  }
}

export default Home;