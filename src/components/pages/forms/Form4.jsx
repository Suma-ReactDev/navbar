import { Button } from "./Form3";
import { Alert } from "./Form3";
import Card from "../../helpers/Card"
import {useState} from "react";
const resumeVariables ={
  firstName:'',
  lastName:'',
  doB:'',
  gender:'',
  marStatus:'',
  languagesKnown:'',
  highestQl:'',
  company:'',
  workStart:'',
  workEnd:''
}
const formInput = [
  {
    id:1,
    control:'input',
    name:'firstName',
    type:'text',
    placeholder:'first name',
    errorMessage:`only letters allowed`,
    label:'first name:',
    pattern:'^[a-zA-Z]+( [a-zA-Z]+)+$',
  },
  {
    id:2,
    control:'input',
    name:'lastName',
    type:'text',
    placeholder:'Last Name',
    errorMessage:`only letters allowed`,
    label:'last name:',
    pattern:'^[a-zA-Z]+( [a-zA-Z]+)+$'
  },
  {
    id:3,
    control:'input',
    name:'doB',
    type:'date',
    placeholder:'select',
    errorMessage:`please select date of birth`,
    label:'date of birth:',
  },
  {
    id:4,
    control:'select',
    name:'gender',
    errorMessage:`please specify gender`,
    label:'gender:',
    options:[
      {id:1,label:'select gender', value:''},
      {id:2,label:'male', value:'male'},
      {id:3, label:'female', value:'female'}
    ]
  },
  {
    id:5,
    control:'select',
    name:'marStatus',
    errorMessage:`please specify marital status`,
    label:'marital status:',
    options:[
      {id:1,label:'please choose gender', value:''},
      {id:2, label:'married', value:'married'},
      {id:3, label:'unmarried', value:'unmarried'}
    ]
  },
  {
    id:6,
    control:'input',
    name:'languagesKnown',
    type:'number',
    errorMessage:`please specify languages known`,
    label:'languages known:',
    step:'1',
    min:'1'
  },
  {
    id:7,
    control:'select',
    name:'highestQl',
    errorMessage:`please mention highest qualification`,
    label:'highest qualification:',
    options:[
      {id:1,label:'select qualification', value:''},
      {id:2, label:'phd', value:'phd'},
      {id:3, label:'pg', value:'pg'},
      {id:4, label:'mtech', value:'mtech'},
      {id:5, label:'btech', value:'btech'},
    ]
  },
  {
    id:8,
    control:'input',
    name:'company',
    type:'text',
    placeholder:'company name',
    errorMessage:`only letters allowed`,
    label:'company name',
    pattern:'^[a-zA-Z]+( [a-zA-Z]+)+$',
  },
  {
    id:9,
    control:'input',
    name:'workStart',
    type:'date',
    placeholder:'starting Date',
    errorMessage:`please select duration-period of service`,
    label:'period of service:',
  },
  {
    id:10,
    control:'input',
    name:'workEnd',
    type:'date',
    placeholder:'ending date',
    errorMessage:`please select duration-period of service`,
  },
]

const Input = ({onChange,errorMessage,label,...props}) =>{
  return (
    <>
      <>
        <label className="p-1 m-1 capitalize text-blue-900 font-serif font-bold">{label}</label>
        <input
        className="bg-sky-200 p-1 m-2 rounded capitalize text-xl text-zinc-700" 
        onChange={onChange}
        {...props}
        />
      </>
      {/* <span>{errorMessage}</span> */}
    </>
  )
}
// const marStatusOption = [
//   {
//     label:'yes',
//     value:'yes'
//   },
//   {
//     label:'no',
//     value:'no'
//   }
// ]
// const genderOption = [
//   {
//     label:'male',
//     value:'male'
//   },
//   {
//     label:'female',
//     value:'female'
//   },
// ]
// const educationOption = [
//   {
//     label:'pg',
//     value:'pg'
//   },
//   {
//     label:'phd',
//     value:'phd'
//   },
//   {
//     label:'btech',
//     value:'btech'
//   },
//   {
//     label:'m.tech',
//     value:'m.tech'
//   }
// ]
const Select = ({onChange,label,errorMessage,options,value,...rest}) =>{
  return(
    <>
      <label className="p-1 m-1 capitalize text-blue-900 font-serif font-bold">{label}</label>
      <select onChange={onChange} value={value} className="bg-sky-200 p-1 m-2 rounded capitalize text-xl text-zinc-700" {...rest} >
        { options.map((option)=>{
          if(option.id ===1){
            return <option value={option.value} key={option.id} disabled defaultValue className="bg-sky-200 ">{option.label}</option>
          }
          return <option value={option.value} key={option.id} className="bg-white">{option.label}</option>
        })}
      </select>
    </>
  )
}
const FormControl = (props) =>{
  if(props.control==='input'){
    return <Input {...props}/>
  }
  else if(props.control==='select'){
    return <Select {...props}/>
  }
}
const Form4 = () => {
  const [formValues, setFormValues] = useState(resumeVariables);
  const [isEditing, setIsEditing] = useState(false);
  const onChangeHandle = (e) =>{
    e.preventDefault();
    setFormValues({...formValues,[e.target.name]:e.target.value})
  }
  const onSubmitHandle = (e) =>{
    e.preventDefault();
    console.log(formValues);
  }
  
  return (
    <Card className={`bg-slate-400`}>
      <div className="bg-cyan-100 max-w-3xl w-screen mx-auto grid items-center rounded">
      <form onSubmit={onSubmitHandle} >
        <h1 className="capitalize flex text-2xl text-blue-800 font-bold place-content-center">resume</h1>
        <fieldset className=" border-2 border-solid border-blue-900 m-2">
          <legend className="capitalize font-bold text text-lg">personal info:</legend>
          <div className="grid grid-cols-2">
            {formInput.map((input)=>{
              if(input.id<=6){
                return <FormControl 
                          {...input} 
                          key={input.id}
                          onChange={onChangeHandle}
                          value={formValues[input.name]}
                          />
              }
              else return null
            })}
          </div>
        </fieldset>
        <fieldset className=" border-2 border-solid border-blue-900 m-2  ">
        <legend className="capitalize font-bold text text-lg">work history:</legend>
        <div className="grid grid-cols-2">
        {formInput.map((input)=>{
              if(input.id>6){
                return <FormControl 
                          {...input} 
                          key={input.id}
                          onChange={onChangeHandle}
                          value={formValues[input.name]}/>
              }
              else return null
            })}
          </div>
        </fieldset>
        <Button type='submit' btnName={isEditing ? 'edit' : 'submit'} className='bg-teal-600 min-w-full hover:text-white'/>
      </form>
      </div>
    </Card>
  )
}
export default Form4
