import './course-table.scss'
import { Link } from 'react-router-dom'

function CourseTable() {
    return (
        <>
            <div className='course-table-container' id='course-nav'>
                <div className='course-table'>
                    <table>
                        <caption className='table-title'>
                            <h2>Các khoá học tháng 10</h2>
                        </caption>
                        <tr className='content-title'>
                            <th>Thứ tự</th>
                            <th className='course-course'>Khoá học</th>
                            <th>Số lượng</th>
                            <th>Nội dung đào tạo</th>
                            <th>Thời gian</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td className='course-no'>
                                <p>1</p>
                            </td>
                            <td className='course-date'>
                                <p>Khoá 230B2</p>
                                <p>KG: 06/10/2023</p>
                                <p>BG: 06/1/2024</p>
                            </td>
                            <td className='course-mem'>
                                <p>20</p>
                            </td>
                            <td className="course-training-content">
                                <li className='border-receive'>Đào tạo lí thuyết</li>
                                <li className='border-receive'>Thực hành trong hình</li>
                                <li className='border-receive'>Thực hành trên cabin</li>
                                <li className='border-receive'>Thực hành trên đường</li>
                                <li className='border-receive'>Thực hành trên xe tự động</li>
                                <li>Thực hành tổng hợp trong hình</li>
                            </td>
                            <td className="course-training-time">
                                <li className='border-receive'>05/10/2023 - 21/10/2023</li>
                                <li className='border-receive'>08/11/2023 - 22/11/2023</li>
                                <li className='border-receive'>23/11/2023 - 09/12/2023</li>
                                <li className='border-receive'>23/11/2023 - 09/12/2023</li>
                                <li className='border-receive'>23/11/2023 - 09/12/2023</li>
                                <li>10/12/2023 - 20/12/2023</li>
                            </td>
                            <td className='course-register'>
                                <Link to='/khoahoc/xac-nhan-khoa-hoc'>
                                    <button className='btnRegister'>Đăng ký</button>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className='course-no'>
                                <p>2</p>
                            </td>
                            <td className='course-date'>
                                <p>Khoá 230B2</p>
                                <p>KG: 06/10/2023</p>
                                <p>BG: 06/1/2024</p>
                            </td>
                            <td className='course-mem'>
                                <p>20</p>
                            </td>
                            <td className="course-training-content">
                                <li className='border-receive'>Đào tạo lí thuyết</li>
                                <li className='border-receive'>Thực hành trong hình</li>
                                <li className='border-receive'>Thực hành trên cabin</li>
                                <li className='border-receive'>Thực hành trên đường</li>
                                <li className='border-receive'>Thực hành trên xe tự động</li>
                                <li>Thực hành tổng hợp trong hình</li>
                            </td>
                            <td className="course-training-time">
                                <li className='border-receive'>05/10/2023 - 21/10/2023</li>
                                <li className='border-receive'>08/11/2023 - 22/11/2023</li>
                                <li className='border-receive'>23/11/2023 - 09/12/2023</li>
                                <li className='border-receive'>23/11/2023 - 09/12/2023</li>
                                <li className='border-receive'>23/11/2023 - 09/12/2023</li>
                                <li>10/12/2023 - 20/12/2023</li>
                            </td>
                            <td className='course-register'>
                                <Link to='/khoahoc/xac-nhan-khoa-hoc'>
                                    <button className='btnRegister'>Đăng ký</button>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className='course-no'>
                                <p>3</p>
                            </td>
                            <td className='course-date'>
                                <p>Khoá 230B2</p>
                                <p>KG: 06/10/2023</p>
                                <p>BG: 06/1/2024</p>
                            </td>
                            <td className='course-mem'>
                                <p>20</p>
                            </td>
                            <td className="course-training-content">
                                <li className='border-receive'>Đào tạo lí thuyết</li>
                                <li className='border-receive'>Thực hành trong hình</li>
                                <li className='border-receive'>Thực hành trên cabin</li>
                                <li className='border-receive'>Thực hành trên đường</li>
                                <li className='border-receive'>Thực hành trên xe tự động</li>
                                <li>Thực hành tổng hợp trong hình</li>
                            </td>
                            <td className="course-training-time">
                                <li className='border-receive'>05/10/2023 - 21/10/2023</li>
                                <li className='border-receive'>08/11/2023 - 22/11/2023</li>
                                <li className='border-receive'>23/11/2023 - 09/12/2023</li>
                                <li className='border-receive'>23/11/2023 - 09/12/2023</li>
                                <li className='border-receive'>23/11/2023 - 09/12/2023</li>
                                <li>10/12/2023 - 20/12/2023</li>
                            </td>
                            <td className='course-register'>
                                <Link to='/khoahoc/xac-nhan-khoa-hoc'>
                                    <button className='btnRegister'>Đăng ký</button>
                                </Link>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>

    )
}

export default CourseTable
