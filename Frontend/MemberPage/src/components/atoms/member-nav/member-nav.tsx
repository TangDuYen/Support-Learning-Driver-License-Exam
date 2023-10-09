import './member-nav.scss'
import { Link as Forward } from 'react-router-dom'
import { Link } from 'react-scroll';

function MemberNav() {
    const handleScroll = () => {
        {
            window.scrollTo(0, 0);
        }
    }

    return (
        <>
            <div className='guest-nav-container'>
                <nav>
                    <ul>
                        <div onClick={handleScroll} className="nav-items">
                            <Forward to='/'>
                                <img src='src/imgs/logo.png' alt='logo-img' className='logo' />
                            </Forward>
                        </div>
                        <div onClick={handleScroll} className='nav-items'>
                            <Forward to='/'>
                                <li>Trang chủ</li>
                            </Forward>
                        </div>
                        <div className='nav-items'>
                            <Link to="course-section" spy={true} smooth={true} offset={-100} duration={500}>
                                <li>Khoá học</li>
                            </Link>
                        </div>
                        <div className='nav-items'>
                            <Forward to='/'>
                                <li>Tin tức</li>
                            </Forward>
                        </div>
                        <div className='nav-items'>
                            <Forward to='/thithu'>
                                <li>Thi thử</li>
                            </Forward>
                        </div>
                        <div className='nav-items member-nav-items'>
                            <li>
                                <img src="src/imgs/member/member_img.png" alt="member-img" className='member-avatar' />
                                <ul className="subnav-function">
                                    <li className='receive-border'>
                                        <button type='button'>
                                            Thông tin cá nhân
                                        </button>
                                    </li>
                                    <li className='receive-border'>
                                        <button type='button'>
                                            Khoá học của bạn
                                        </button>
                                    </li>
                                    <li className='receive-border'>
                                        <button type='button'>
                                            Lịch học
                                        </button>
                                    </li>
                                    <li className='receive-border'>
                                        <button type='button'>
                                            Hồ sơ thi
                                        </button>
                                    </li>
                                    <li>
                                        <button>Đăng xuất</button>
                                    </li>
                                </ul>
                            </li>
                        </div>
                    </ul>
                </nav>

            </div>

        </>
    )
}

export default MemberNav