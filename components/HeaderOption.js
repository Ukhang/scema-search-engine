
function HeaderOption({Icon, title, selected}) {
    return (
      <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-teal-700 hover:border-teal-300 pb-3 cursor-pointer ${selected && "text-teal-700 border-teal-300"}`}>
          <Icon className="h-4"/>
          <p className="hidden sm:inline-flex">{title}</p>
      </div>
    )
  }
  
  export default HeaderOption;