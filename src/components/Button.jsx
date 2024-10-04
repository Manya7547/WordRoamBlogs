// rendering the args as a button 

function Button({
    children,
    type: 'button',
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
    classname: '',
    ...props
}) {
  return (
    <button className={`px-4 py-4 rounded-lg ${bgColor} ${className} ${textColor}`} {...props}>
        {children}
    </button>
  )
}

export default Button