import RegisterForm from '@/components/sections/forms/RegisterForm'
import {
  FacebookAuthButton,
  GoogleAuthButton,
} from '@/components/ui/auth/AuthButtons'
import Logo from '@/components/ui/Logo'

function AccountRegisterPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-screen">
      <div className="col-span-1 flex bg-blue-600 items-center">
        <div className="mx-auto w-32 h-auto">
          <Logo white />
        </div>
      </div>
      <div className="col-span-1 flex flex-col items-center justify-center bg-gray-50">
        <h2 className="font-ext-bold text-xl text-center">
          Let&apos; get started
        </h2>
        <div className="w-96">
          <div className="flex flex-col space-y-2 py-6">
            <div>
              <GoogleAuthButton />
            </div>
            <div>
              <FacebookAuthButton />
            </div>
            {/* <div>
              <AppleAuthButton />
            </div> */}
            <div className="py-4">
              <p className="relative border-b border-rose-400 my-4">
                <span className="text-sm absolute -top-2.5 left-0 right-0 text-center ">
                  <span className="bg-gray-50 px-2 font-ext-bold">OR</span>
                </span>
              </p>
            </div>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountRegisterPage
