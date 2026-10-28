import UseContext from "../context/Usecontext"
const Provider = ({children}) => {
    const employee={name:"dinesh",dept:"IT"}

  return (
   <>
    <UseContext.Provider value={employee}>
        {children}
    </UseContext.Provider>
   </>
  )
}

export default Provider
