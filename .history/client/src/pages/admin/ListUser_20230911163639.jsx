import React, { useEffect, useState } from 'react';
import axios from 'axios';// khong co dau ngoac nhon

export default function ListUser() {
    const [users, setUsers] = useState([]);
    // goi API lấy tất cả thông tin 
    const loadData = () => {
        axios.get("http://localhost:8000/users")
            .then(response => setUsers(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        loadData();
    }, [])

    // ham xoa du lieu
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/users/${id}`)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }
    return (
        <>
            <div className='container w-75 d-flex align-items-center justify-content-center flex-column m-3'>
                <div className=''>
                    <button className='btn btn-primary mb-3'>+ Thêm mới tài khoản</button>
                </div>
                <table className='table table-striped table-hover table-bordered'>
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }} scope='col'>STT</th>
                            <th style={{ textAlign: "center" }} scope='col'>Tên</th>
                            <th style={{ textAlign: "center" }} scope='col'>Giới tính</th>
                            <th style={{ textAlign: "center" }} scope='col'>Ngày sinh</th>
                            <th style={{ textAlign: "center" }} scope='col'>Địa chỉ</th>
                            <th style={{ textAlign: "center" }} scope='col'>Email</th>
                            <th style={{ textAlign: "center" }} scope='col' colSpan={2}>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.user_name}</td>
                                <td>{user.gender === 0 ? "Nam" : "Nữ"}</td>
                                <td>{user.dateOfBirth}</td>
                                <td>{user.address}</td>
                                <td>{user.email}</td>
                                <td ><i className="fa-solid fa-pen-to-square "></i></td>
                                <td onClick={() => handleDelete(user.id)}><i className="fa-solid fa-trash "></i></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
