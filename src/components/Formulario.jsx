import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Formulario = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (celular.length < 9 || celular.length > 9) {
      alert("Su numero de celular debe de tener 9 digitos");
      return;
    }

    const CreateUser = {
      nombre,
      email,
      celular,
    };

    try {
      const response = await fetch(
        "https://654acfad5b38a59f28ee3f86.mockapi.io/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(CreateUser),
        }
      );
      if (response.ok) {
        alert("Usuario creado exitosamente")
        navigate("/");
      } else {
        const errorData = await response.json();
        console.error(errorData.error);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <div>
      <h2 className="font-bold text-3xl m-5">
        Crea Tu <span className="text-sky-600">usuario</span>
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="block text-gray-700 uppercase font-bold my-2"
          >
            Nombre del usuario
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            required
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email del usuario
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 font-bold mt-4"
            htmlFor="Celular"
          >
            Celular del usuario
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md	"
            placeholder="Celular"
            type="number"
            id="Celular"
            name="celular"
            required
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            minLength={9}
            min={1}
          />
        </div>
        <input
          type="submit"
          className="bg-sky-600 w-full p-3 text-white uppercase font-bold hover:bg-sky-700 cursor-pointer transition-colors rounded-md"
          value="Realizar publicación"
        />
      </form>
    </div>
  );
};

export default Formulario;
