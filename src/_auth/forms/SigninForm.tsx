import React from 'react';
import * as z from "zod";

import { Button } from "@/components/ui/button";
 


const SigninForm = () => {
  const formSchema = z.object({
    username: z.string().min(2).max(50),
  })
  
  return (
    <div>
      <div>działą</div>
      <Button>Click me</Button>
    </div>
  )
}

export default SigninForm;