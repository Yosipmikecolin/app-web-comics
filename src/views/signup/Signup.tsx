import { useEffect, useState } from "react";
import { mutationUser } from "../../api/mutation";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft } from "lucide-react";
import { useUser } from "../../hooks/useUser";
import classes from "./Signup.module.css";

const Signup = () => {
  const { mutateAsync, isPending } = mutationUser();
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const [values, setValues] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (values.name && values.lastname && values.email && values.password) {
        const reponse = await mutateAsync(values);
        const { username, token } = reponse;
        localStorage.setItem("username", username);
        localStorage.setItem("token-mocion", token);
        setUser(username);
        toast.success("Registro exitoso");
        setValues({
          name: "",
          lastname: "",
          email: "",
          password: "",
        });
        setTimeout(() => {
          navigate("/");
        }, 1600);
      } else {
        toast.error("Completa todos los campos");
      }
    } catch (error: any) {
      const { message } = error.response.data;
      if (message.includes("duplicate")) {
        toast.error("El correo ya se encuentra registrado");
      } else {
        toast.error("Ocurrio un error inesperado");
      }
    }
  };

  return (
    !user && (
      <>
        <Link to="/">
          <button className={classes["button-back"]}>
            <ArrowLeft />
            Atras
          </button>
        </Link>

        <form className={classes["container-signup"]} onSubmit={handleSubmit}>
          <h1>Registrarse</h1>
          <div className={classes["conatiner-inputs"]}>
            <label>Nombre</label>
            <input
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>

          <div className={classes["conatiner-inputs"]}>
            <label>Apellidos</label>
            <input
              value={values.lastname}
              onChange={(e) =>
                setValues({ ...values, lastname: e.target.value })
              }
            />
          </div>

          <div className={classes["conatiner-inputs"]}>
            <label>Email</label>
            <input
              value={values.email}
              type="email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>

          <div className={classes["conatiner-inputs"]}>
            <label>Contraseña</label>
            <input
              value={values.password}
              type="password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
          <button disabled={isPending}>
            {isPending ? (
              <div className={classes.loader} />
            ) : (
              "Registrar usuario"
            )}{" "}
          </button>
        </form>
      </>
    )
  );
};

export default Signup;
