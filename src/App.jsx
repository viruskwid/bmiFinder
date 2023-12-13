
import {  useState } from 'react'
import './App.css'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap';


function App() {
 const [Age,setAge] = useState(0)
 const [Weight,setWeight] = useState(0)
 const [Height,setHeight] = useState(0)
 const [bmi,setBmi] = useState(0);
 const [validAge,setvalidAge]=useState(true)
 const [validWeight,setvalidWeight]=useState(true)
 const [validHeight,setvalidHeight]=useState(true)
 const [msg,setMsg] = useState('')
 

 console.log(Age);
 const handlereset =()=>{
  setAge(0)
  setHeight(0)
  setBmi(0)
  setWeight(0)
  setvalidAge(true)
  setvalidHeight(true)
  setvalidWeight(true)
  setMsg('')
 }


 // /^\d*\.?\d*$/
 const validUserInput = (e)=>{
  const {name,value} = e.target
  console.log(`${name},${value}`);
  console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
  if(!!value.match(/^\d*\.?\d*$/)){
    if(name==='age'){
      setAge(value)
      setvalidAge(true)
    }else if(name==='weight'){
      setWeight(value)
      setvalidWeight(true)
    }else{
      setHeight(value)
      setvalidHeight(true)
    }
  }else{
    if(name==='age'){
      setAge(value)
      setvalidAge(false)
    }else if(name==='weight'){
      setWeight(value)
      setvalidWeight(false)
    }else{
      setHeight(value)
      setvalidHeight(false)
    }
  }
 }
 
 const handleCalculate = (e)=>{
  e.preventDefault()
  if(!Age || !Weight || !Height){
    alert("please fill the form completely")
  }else{
    var heightInMeters = Height / 100;

    // Calculate BMI
    var bmi = Weight / (heightInMeters * heightInMeters);
    setBmi(bmi.toFixed(1))
  
  if (bmi < 18.5) {
    setMsg("Underweight!") 
} else if (bmi >= 18.5 && bmi < 25) {
  setMsg("You are Fit and Healthy!") 
} else if (bmi >= 25 && bmi < 30) {
    setMsg( "Go to Gym!");
} else {
    setMsg("Obese");
}
}
 }
 

  return (
    <>
      <div className='d-flex justify-content-center align-items-center wrapper' style={{width:'100%',height:'100vh'}}>
        
        <div style={{width:'600px'}} className='p-5 rounded bg-light shadow'>
        <h2 className='text-center' style={{fontSize:'40px', marginTop:'100px'}}>BMI Calculator</h2>
        <p className='text-center'>Calculate your Body Mass Index</p>
        <div style={{width:'100%',height:'170px'}} className='d-flex justify-content-center align-items-center flex-column bg-secondary'>
          <h1  style={{height:'50px'}}>Your BMI is : {bmi} </h1>
          
          <p className='fw-bolder'>{msg}</p>
          <p style={{fontSize:'20px'}} className='fw-bolder text-center'>Body Mass Index is a person’s weight in kilograms divided by the square of height in meters.</p>
        </div>
        <form  onSubmit={handleCalculate}>
          <div className='inp shaddow'>
          <Form.Control size="lg"  name='age' type="text" placeholder="Enter Age" onChange={e=>validUserInput(e)} value={Age || ""}  />
          </div>
          {!validAge&&<div style={{color:'red'}}  className='mb-3 text-danger fw-bolder'>
            Invalid Age Input
          </div>}
          <div className='mb-3 inp shadow'>
          <Form.Control size="lg"  name='weight' type="text" placeholder="Weight in Kgs" onChange={e=>validUserInput(e)} value={Weight || ""} />
          </div>
          {!validWeight&&<div style={{color:'red'}} className='mb-3 text-danger fw-bolder'>
            Invalid Weight Input
          </div>}
          <div className='mb-3 inp shadow'>
          <Form.Control size="lg"  name='height' type="text" placeholder="Height in cms" onChange={e=>validUserInput(e)} value={Height|| ""} />
          </div>
          {!validHeight&&<div style={{color:'red'}} className='mb-3 text-danger fw-bolder'>
            Invalid Height Input
            
          </div>}
          <div className='d-flex justify-content-between gap-2'>
            <button disabled={validAge&&validHeight&&validWeight?false:true} type='submit' className='btn btn-success'>Calculate</button>
            <a onClick={handlereset}  className='btn btn-danger reload'>Reload</a>
          </div>
        </form>
        
        
        </div>
        </div>
      
    </>
  )
}

export default App;