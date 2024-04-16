import { useState, type FormEvent } from "react"

const RegisterForm = () => {

    const [response, setResponse] = useState("");

const formHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement)
    try {

    const response = await fetch("/api/auth/register", {
        method: "POST",
        body: formData
    })
    
    const responseMessage = await response.json()
    setResponse(responseMessage)
    if(response.ok){
        window.location.assign("iniciar-sesion")
    }
} catch(e) {
    console.log(e)
    setResponse("Se ha producido un error. Por favor, intente mas tarde.")
}
}
    return (
        <>
        <form onSubmit={formHandler} className="flex flex-col justify-center max-w-md">

        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" placeholder="Introduzca su nombre" required 
        className="border p-2 border-niceGray rounded-md mb-3" maxLength={30}
        />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Introduzca su email" required 
        className="border p-2 border-niceGray rounded-md mb-3" maxLength={30}
        />
        
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" placeholder="Introduzca su contraseña" required
        className="border p-2 border-niceGray rounded-md mb-5" maxLength={30}
        />
        {response && <p className="my-2">{response}</p>}
        <button type="submit" className="py-2 bg-primary rounded-lg text-white">Registrarse</button>
</form>

    <div className="mt-5 px-8">
        <p className="mt-5">Ya tenés una cuenta? <a href="/iniciar-sesion" className="text-link hover:underline">Inicía sesión aca</a></p>
    </div>
        </>
    )

}
export default RegisterForm