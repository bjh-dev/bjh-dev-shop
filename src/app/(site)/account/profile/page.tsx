import ProfileForm from '@/components/sections/forms/ProfileForm'
import Logo from '@/components/ui/Logo'

function AccountProfilePage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-screen">
      <div className="col-span-1 flex bg-blue-600 items-center">
        <div className="mx-auto w-32 h-auto">
          <Logo white />
        </div>
      </div>
      <div className="col-span-1 flex flex-col items-center justify-center bg-gray-50">
        <div className="max-w-xl mx-auto">
          <div className="justify-start">
            <h2 className="font-ext-bold text-xl">Your Profile</h2>
          </div>
          <div className="w-96">
            <div className="flex flex-col space-y-2 py-6">
              <ProfileForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountProfilePage
