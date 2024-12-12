import React, { useContext, useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';

import HeaderComp from '../components/HeaderComp/HeaderComp';
import '../pages/Store.css';
import { Context } from '../index';
import ProfileComp from '../components/ProfileComp/ProfileComp';
const ProfilePage = () => {
    const {product} = useContext(Context)


    return useObserver(() =>(
        <div>
            <div className='likeHeader'>
                <HeaderComp/>
            </div>
            <ProfileComp/>
        </div>
    ));
};

export default ProfilePage;