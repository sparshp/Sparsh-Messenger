
import { useState, useEffect } from 'react';
import { FormControl ,Input} from '@material-ui/core';
import Message from './Message'
import './App.css';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const [input, setInput] =useState('');
  const [messages, setMessages]= useState([]);
  const [username, setUsername]= useState('');

  // useState = variable in REACT
  //useEffect = run code on a condition in REACT

  useEffect(() => {
    //run once when the app component loads
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id , message:doc.data()})))
    });
  }, [] )

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
    //run code here.....
    // if its blank inside , this code run  Once when the app component loads
    //
  }, [])    //condition


  const sendMessage = (event) =>{
    event.preventDefault();

    db.collection( 'messages').add({
      message:input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('');

  }


  return (

    <div className="App">
     <img  alt=" " src="https:facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
     <h1> SPARSH MESSENGER WEB APPLICATION </h1> 
     <h2> welcome {username}</h2>

     <form className="app__form">
      <FormControl className="app__formControl">
      
      <Input className="app__input" placeholder='Enter a message...' value={input} onChange={event=> setInput(event.target.value)}/>
      
       <IconButton className="app__iconButton" disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage} >
       <SendIcon />
       </IconButton>
      
    </FormControl>
     
     {/* Messeges themselves*/}

     </form>
       
     <FlipMove>

     {
      messages.map(({id,message}) =>(
        <Message key={id} username={username} message={message} />
      ))
    }

     </FlipMove>
     
     
    </div>
  );
}

export default App;
