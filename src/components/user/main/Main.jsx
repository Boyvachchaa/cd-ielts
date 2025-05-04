import { Link } from 'react-router-dom'

import UserHeader from '../../../ui/userHeader/UserHeader'

import './Main.scss'


const Main = () => {
  return (
    <div className="main">
      <UserHeader />
      <div className="full_mock_test_component mt-5">
        <div className="full_component_items rounded">
          <div className="component_head rounded-top">
            <h1 className='py-4'>Full Mock Test</h1>
          </div>
          <div className="component_main">
            <div className="main_items rounded-bottom">
              <p>
                Answer all the questions. 
                You can change your answers at any time during the test. 
                For each part of the test there will be time for 
                you to look through the questions and time for you to check your answers. 
                You will take this mock test in the Listening, Reading, and Writing sequence.
                There are four parts to the test. 
                There are a total of 80 questions, 40 each in the 
                Reading and Listening sections. Each question carries one mark.
              </p>
              <Link 
                to="/listeningrules" 
                className="btn btn-primary text-decoration-underline"
              >
                Click here for next page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main