
import React from 'react';
import YouTube from 'react-youtube';
import img from '../assets/helloImage.png'

export default function ErrorMessages() {
  const videoId = 'Ced_-pQ5Rms&t=905s';
  const url = `https://www.youtube.com/embed/'${videoId}`;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} className = "p-5 m-5 container-sm">
      <img src={img} alt="" style={{ marginBottom: '1rem' }} />
      <h1 style={{ textAlign: 'center', color: '#3897D3' }}>Oops!</h1>
      <p style={{ textAlign: 'center', color: '#f19997'}}>If you typed just random link, then can't do anything about it. </p>
      <h2 style={{ textAlign: 'center', color: '#3897D3' }}>If you followed the link, I'm working on the page. Will be getting it up and running as soon as possible.</h2>
    </div>
  </div>

  );
}