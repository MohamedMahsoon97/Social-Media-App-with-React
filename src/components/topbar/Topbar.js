import './Topbar.css';
import { Chat, Notifications, Person, Search } from '@material-ui/icons';
import React from 'react';
import BarImg from '../../assets/person/1.jpeg';

const Topbar = () => {
      return (
            <div className='topbarContainer'>
                  <div className='topbarLeft'>
                        <span className='logo'>MahsoonSocial</span>
                  </div>
                  <div className='topbarCenter'>
                        <div className='searchbar'>
                              <Search className='searchIcon' />
                              <input type="text" className='searchInput' placeholder="Search for friend , post or videos" />
                        </div>
                  </div>
                  <div className='topbarRight'>
                        <div className="topbarLinks">
                              <div className="topbarLink">Homepage</div>
                              <div className="topbarLink">Timeline</div>
                        </div>
                        <div className='topbarIcons'>
                              <div className="topbarIconItem">
                                    <Person />
                                    <span className='topbarIconBadge'>1</span>
                              </div>
                              <div className="topbarIconItem">
                                    <Chat />
                                    <span className='topbarIconBadge'>2</span>
                              </div>
                              <div className="topbarIconItem">
                                    <Notifications />
                                    <span className='topbarIconBadge'>3</span>
                              </div>
                        </div>
                        <img src={BarImg} alt="" className='topbarImg' />
                  </div>
            </div>
      )
}

export default Topbar;