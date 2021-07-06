import React, { useState } from 'react';

const App = (props) => {
  	  
  const [tabOpenStatus, setTabOpenStatus] = useState(false);
  const handleClick = () => {
        setTabOpenStatus(!tabOpenStatus);
        console.log(tabOpenStatus);
	  }
	
	let question = props.data.question;
	let answer
	
	let buttonText = "+";
	let tabClass = "tab closed"
	if (tabOpenStatus) {
	    buttonText = "-";
	    tabClass="tab opened"
	    answer = props.data.answer;
	  }
	
	return(
        <div>
          <div>
            <h1>We're here to help</h1>
          </div>
          <div className="question">
            <div className={tabClass} onClick={handleClick}>
              {buttonText}
            </div>
            <h3>{question}</h3>
          </div>
          <div>
            <p>{answer}</p>
          </div>
            
        </div>
  )
}








// const App = (props) => {
// // debugger
//  let faqQuestions = props.data.question 
// //   let[answerVisibility, setAnswerVisibility] = useState(true)

// //   const questionClick = () => {
// //     if(answerVisibility) {
// // setAnswerVisibility(false)
// //     } else {
// //       setAnswerVisibility(true)
// //     }
// const answerAlert = () => alert(props.data.answer)
  
//   return(
//     <div onClick={answerAlert}>{faqQuestions}</div>
//   )
//   }

export default App;
