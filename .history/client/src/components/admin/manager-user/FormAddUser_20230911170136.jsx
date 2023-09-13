import { notification } from 'antd';
import React, { useState } from 'react'

export default function FormAddUser({ handleClose }) {
    const [user, setUser] = useState({
        user_name: '',
        gender: 0,
        dateOdBirth: "",
        email: '',
        address: "",
        password: ''
    });

    // ham lay du lieu tu o input
    const handleChange = (e) => {
        const { value, name } = e.target;
        setUser({ ...user, [name]: value })
    }

    // ham submit du lieu
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/users")
            .then(response => {
                if (response.status === 200) {
                    notification.success({
                        message: "Thành công",
                        description: "Thêm mới người dùng thành công"
                    });
                }
            })
    }

    return (
        <>
            <div className='product-container'>
                <form className='form-container'>
                    <div className='mb-3'>
                        <h2>Thêm mới người dùng </h2>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="user_name" className="form-label">
                            Tên
                        </label>
                        <input type="text" className="form-control" name="user_name" id="user_name" onChange={handleChange} />
                    </div>
                    <div className='d-flex'>
                        <label htmlFor="gender" className="form-label">
                            Giới tính
                        </label>
                        <div className="form-check me-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="flexRadioDefault1"
                            />
                            <label className="form-check-label" htmlFor="gender">
                                Nam
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="gender"
                            />
                            <label className="form-check-label" htmlFor="gender">
                                Nữ
                            </label>
                        </div>
                    </div>

                    <div className="mb-3 mt-3">
                        <label htmlFor="dateOfBirth" className="form-label">
                            Ngày sinh
                        </label>
                        <input type="text" className="form-control" name="dateOfBirth" id="dateOfBirth" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                            Địa chỉ
                        </label>
                        <input type="text" className="form-control" name='address' id='address' onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <input type="email" className="form-control" name='email' id='email' onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="password">
                            Mật khẩu
                        </label>
                        <input type="password" className="form-control" name='password' id='password' onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary me-2">
                        Thêm mới
                    </button>
                    <button onClick={handleClose} type="button" className="btn btn-danger">
                        Huỷ
                    </button>
                </form>

            </div>

        </>
    )
}
