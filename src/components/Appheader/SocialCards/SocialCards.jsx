import { Button,Card, Col, Image, message, Row, Space, Spin, Typography } from "antd";
import { useEffect, useState } from "react";

import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

import { CgWebsite } from 'react-icons/cg';
import { SiGmail } from 'react-icons/si';
import { API, AVATAR_API } from '../../withStrapi/constant';

const SocialCards = () =>{
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProfiles = async () => {
    setIsLoading(true)
    try{
      const response = await fetch(`${API}/users`);
      const data = await response.json();
      setProfiles(data ?? []);
    }
    catch (error){
      console.log(error);
      message.error('Error while fetching profiles!!');
    }
    finally {
      setIsLoading(false);
    }
  }
  useEffect(()=>{
    fetchProfiles()
  },[]);
  
  return(
    <Row>
      
    </Row>
  )
}

