import StaffHeader from "../../organisms/header/header"
import UserListTemplate from "../../templates/user-list/user-list"

function UserListPage() {
    return (
        <div className="page-container">
            <div className="staff-header">
                <StaffHeader />
            </div>
            <div className="staff-body">
                <UserListTemplate />
            </div>
        </div>
    )
}

export default UserListPage