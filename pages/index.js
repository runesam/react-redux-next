import React, { Component } from 'react';
import Link from 'next/link';

import stylesheet from '../styles/index.scss';

class Home extends Component {
    render() {
        return (
            <div className="home_page">
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />    
                <Link href='/dummy'>
                    <a className='link'>Dummy Application</a>
                </Link>
                <Link href='/weather'>
                    <a className='link'>Weather Application</a>
                </Link>
                <Link href='/blogger'>
                    <a className='link'>Blogger Application</a>
                </Link>
            </div>
        );
    }
}
export default Home;
