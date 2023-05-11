import React from 'react';
import HiveBar from '../../components/HiveBar/HiveBar.component';
import HiveMobile from '../../components/HiveMobileNav/HiveMobile.component';
import HiveGlobal from '../../components/styled/HiveGlobal.styled';
import LeftSidebar from '../../components/LeftSide/LeftSidebar.component';

import * as HiveApp from './HiveScreen.styled';
import Story from '../../components/Stories/Stories.component';

import profile1 from '../../assets/img/profile-1.jpg';
import Feeds from '../../components/Feed/Feeds.component';
import Message from '../../components/Messages/Message.component';
import Friends from '../../components/Friends/Friends.component';

function Hive() {
  return (
    <>
      <HiveGlobal />
      <HiveBar />

      <HiveApp.Main>
        <HiveMobile />

        <div className="container">
          {/* left side */}
          <LeftSidebar />

          {/* middle side */}

          <div className="middle">
            {/* Stories */}
            <Story />

            {/* Create post */}
            <HiveApp.CreatePost action="">
              <div className="profile-picture">
                <img src={profile1} alt="" />
              </div>
              <input type="text" placeholder="create a post" id="create-post" />
              <input type="submit" value="Post" className="btn btn-primary" />
            </HiveApp.CreatePost>

            {/* Feeds */}
            <Feeds />
          </div>

          <HiveApp.Right>
            {/* right side */}
            <Message />
            <Friends />
          </HiveApp.Right>
        </div>
      </HiveApp.Main>
    </>
  );
}

export default Hive;
