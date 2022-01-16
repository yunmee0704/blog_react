import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
 let [글제목, 글제목변경] = useState(['남자 코트 추천' ,'강남 우동 맛집','비전공자 프론트엔드 취업'])
 let [따봉, 따봉변경]=useState(0); 

 let [modal, modal변경] = useState(false);
 
function 제목변경(){
  let newArray= [...글제목];
  newArray[0] ='여자 코트 추천'
  글제목변경(newArray);

}

function modal변경() {
  let i = 0;
  i+=1;
  
  i % 2 === 0 ? modal(false) : modal(true)


}


 return (
    <div className="App">
        <div className ="black-nav">
          개발Blog
        </div>
        <button onClick = {  제목변경 }>버튼</button>
        <div className='list'>
          <h3>{ 글제목[0] } <span onClick ={ () =>{따봉변경(따봉+1); console.log(따봉)}}>👍</span>{따봉} </h3>
          <p>1월 16일 발행</p>
          <hr/>
        </div>
        <div className='list'>
          <h3>{ 글제목[1] }</h3>
          <p>1월 16일 발행</p>
          <hr/>
        </div>
        <div className='list'>
          <h3 onClick = {() => {modal변경(true);}}>{ 글제목[2] }</h3>
          <p>1월 16일 발행</p>
          <hr/>
        </div>
        <button onClick = {modalShowClose()}>모달창 보이기</button>
        {
          modal === true
          ? <Modal></Modal>
          : null 
        }
       
    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>

  )
}

export default App;
