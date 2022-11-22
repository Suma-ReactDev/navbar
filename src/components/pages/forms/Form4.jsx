import { Button } from "./Form3";
import { Alert } from "./Form3";
import Card from "../../helpers/Card"
import {useState} from "react";
const resumeVariables ={
  firstName:'',
  lastName:'',
  highestQl:'',
  doB:'',
  company:'',
  periodOfWork:'',
  marStatus:'',
  languagesKnown:''
}
const formInput = [
  {
    id:1,
    type:'text',
    placeholder:'First Name',
    errorMessage:`Only Letters allowed`,
    label:'First Name',
    pattern:'/^[aA-zZ\s]+$/'
  },
  {
    id:2,
    type:'text',
    placeholder:'Last Name',
    errorMessage:`Only Letters allowed`,
    label:'Last Name',
    pattern:'/^[aA-zZ\s]+$/'
  },
  {
    id:3,
    type:'select',
    placeholder:'Select',
    errorMessage:`Please select Qualification`,
    label:'Highest Qualification',
  },
  {
    id:4,
    type:'date',
    placeholder:'Select',
    errorMessage:`Please select Date of Birth`,
    label:'Date of Birth',
  },
  {
    id:5,
    type:'text',
    placeholder:'Company Name',
    errorMessage:`Only Letters allowed`,
    label:'Company Name',
    pattern:'/^[aA-zZ\s]+$/'
  },
  {
    id:6,
    type:'select',
    placeholder:'Starting Date',
    errorMessage:`Please select duration-period of service`,
    label:'Period of Service',
  },
  {
    id:7,
    type:'select',
    placeholder:'Ending Date',
    errorMessage:`Please select duration-period of service`,
    label:'Ending Date',
  },
  {
    id:8,
    type:'select',
    placeholder:'Ending Date',
    errorMessage:`Please select duration-period of service`,
    label:'Ending Date',
  },
  {
    id:9,
    type:'checkbox',
    errorMessage:`Please specify marital status`,
    label:'marital status',
  },
  {
    id:10,
    type:'number',
    errorMessage:`Please specify languages known`,
    label:'Languages Known',
  },


]
const Form4 = () => {
  const [formValues, setFormValues] = useState(resumeVariables)
  return (
    <Card>
      
    </Card>
  )
}

export default Form4
