export default function Navbar() {
  return (
    <>
      <nav className="bg-white p-4 flex justify-between items-center text-gray-600">
        <div className="flex items-center space-x-4 gap-4">
          <img
            src="https://i.ibb.co.com/ThfCXmV/Group-18261.png"
            alt="UMKM-Ku Logo"
            className="h-12 cursor-pointer"
          />
          <img
            className="h-12 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/8/83/OJK_Logo.png"
            alt="Workflow"
          />
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Lender
          </a>
        </div>
        <div className="dropdown dropdown-end mt-2">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow text-gray-600"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
