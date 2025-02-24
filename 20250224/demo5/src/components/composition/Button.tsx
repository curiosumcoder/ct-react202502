/* eslint-disable @typescript-eslint/no-explicit-any */
// Specialization

function Button({children,...props}:any) {
  return (
    <>
      <button className="btn btn-primary" {...props}><>{children}</></button>
    </>
  )
}

export function ButtonSuccess({...props}) {
  return (
    <>
      <Button className="btn btn-success" {...props}/>
    </>
  )
}

export function ButtonSubmit({...props}) {
  return (
    <>
      <ButtonSuccess type="submit" className="btn btn-secondary" {...props}/>
    </>
  )
}

export default Button