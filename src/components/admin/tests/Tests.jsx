import { Link } from "react-router-dom"

import AdminHeader from "../../../ui/adminHeader/AdminHeader"
import AdminNavbar from "../../../ui/adminNavbar/AdminNavbar"

import { MockTest } from "./mock"


const Tests = () => {
  return (
    <div className='add-test'>
      <AdminNavbar />
      <div className="main_content">
        <AdminHeader />
        <div className="main_head container mt-4 d-flex justify-content-between align-items-center">
          <div className="add_user p-3">
            All Tests
          </div>
          <Link to="/addTest" className="add_user">
            Add Test
          </Link>


        </div>

        {/* Cards */}
        <div className="container mt-4">
          <div className="row">
            {MockTest.map((test, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Mock #{test.mockNumber}</h5>
                    <p className="card-text"><strong>Type:</strong> {test.type}</p>
                    <p className="card-text"><strong>Added:</strong> {test.addedDate}</p>
                    <div className="buttons">
                      <Link to={`/admin/tests/${test.mockNumber}`} className="btn btn-primary">
                        View Details
                      </Link>
                      <div className="mt-3 d-flex">
                        <button
                          className="btn btn-warning mr-2"
                        >
                          <i className="fas fa-edit"></i> Edit
                        </button>
                        <button
                          className="btn btn-danger mx-2"
                        >
                          <i className="fas fa-trash-alt"></i> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Tests