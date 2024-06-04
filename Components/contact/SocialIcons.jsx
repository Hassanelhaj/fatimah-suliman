import React from 'react'
import {BsFacebook, BsLinkedin, BsTelegram, BsTiktok, BsWhatsapp} from 'react-icons/bs'

import {FaLinkedin} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si'

    const SocialIcons = () => {
        return (
          <div className='flex justify-center items-center gap-2'>
             <a href='https://www.facebook.com/manooah.memy?mibextid=kFxxJD' target='_blank' className='text-3xl hover:opacity-70' >
              <BsFacebook/>
              </a> 
              <a href='https://chat.whatsapp.com/FWlAWCy0LSO463tbXeQ4Rh' target='_blank' className='text-3xl hover:opacity-70' >
              <BsWhatsapp/>
              </a>
              <a href='https://t.me/+M1qssIfXpLM1MDk0' target='_blank' className='text-3xl hover:opacity-70' >
              <BsTelegram/>
              </a>
          
             <a target='_blank' href='mailto:Fatimahkokosfk@gmail.com' className='text-3xl hover:opacity-70'>
              <SiGmail/>
              </a>
          </div>
        )
      }

export default SocialIcons