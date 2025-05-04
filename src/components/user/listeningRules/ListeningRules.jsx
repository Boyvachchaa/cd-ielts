import UserHeader from '../../../ui/userHeader/UserHeader'

import './ListeningRules.scss'

const ListeningRules = () => {
  return (
    <>
        <UserHeader />
        <div className="listening_rules">
          <div className="rules mt-5 rounded p-4">
              <div className="rules_item p-3 rounded">
                  <h2 className='text-center'>IELTS Listening</h2>
                  <div className="items">
                    <div className="instruction_1">
                      <h5 className='text-start'>INSTRUCTIONS TO CANDIDATES</h5>
                      <ul className='text-start'>
                          <li>Answer all the questions.</li>
                          <li>You can change your answers at any time during the test.</li>
                      </ul>
                    </div>
                    <div className="instruction_2">
                      <h5 className='text-start'>INFORMATION FOR CANDIDATES</h5>
                      <ul className='text-start'>
                        <li>There are 40 questions in this test.</li>
                        <li>Each question carries one mark.</li>
                        <li>You will hear each part once.</li>
                        <li>For each part of the test there will be 
                          time for you to look through the questions and 
                          time for you to check your answers.</li>
                      </ul>
                    </div>
                    <button className="btn btn-primary ">Start test</button>
                  </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default ListeningRules