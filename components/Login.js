import Button from '@material-tailwind/react/Button';
import Image from 'next/image';
import React from 'react';
import { signIn } from 'next-auth/client';

function Login() {
  console.log(process.env.GOOGLE_CLIENT_ID);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image height={300} width={500} objectFit="contain" src="http://links.papareact.com/1ui" />
      <Button onClick={signIn} className="w-44 mt-10" color="blue" buttonType="filled" ripple="light">
        Login
      </Button>
    </div>
  );
}

export default Login;
