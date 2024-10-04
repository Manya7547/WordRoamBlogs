// accepts props as children. Its a box where where define styling props  

 function Container({children}) {
   return <div className="w-full max-w-7xl mx-auto px-4">{children}</div> ;
   
 }
 
 export default Container