import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/sandeeep0098" target="__blank">
        <GitHubIcon />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/sandeep-yadav-66254b137/"
        target="__blank"
      >
        <LinkedInIcon />
      </a>{' '}
    </div>
  </div>
);

export default SocialMedia;
