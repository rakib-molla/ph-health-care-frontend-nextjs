import { getUserInfo, isLoggedIn, removeUser } from "@/services/actions/auth.services";
import { Button } from "@mui/material"
import Link from 'next/link'
import {useRouter} from 'next/navigation'

function AuthButton() {
    const router = useRouter();
  const userInfo = getUserInfo();
  const handleLogOut=()=>{
    removeUser();
    router.refresh();
  }
  return (
   <> 
   {userInfo?.userId ? (
              <Button color="error" onClick={handleLogOut}>Log Out</Button>
            ) :(
              <Button component={Link} href="/login">Login</Button>
            )}
   </>
  )
}

export default AuthButton